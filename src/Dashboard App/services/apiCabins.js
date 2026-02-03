import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data: cabins, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("cabins could not be loaded..!");
  }
  return cabins;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("cabins could not be deleted..!");
  }
  return null;
  // or return id; always return something
}

// export async function createEditCabin(newCabin, id) {
//   const hasImagePath =
//     typeof newCabin.image === "string" &&
//     newCabin.image.startsWith(supabaseUrl);

//   const imageName = hasImagePath
//     ? null
//     : `${Date.now()}-${newCabin.image.name}`.replaceAll("/", "");

//   const imagePath = hasImagePath
//     ? newCabin.image
//     : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

//   let cabinQuery = supabase.from("cabins");

//   // CREATE
//   if (!id) {
//     cabinQuery = cabinQuery.insert([{ ...newCabin, image: imagePath }]);
//   }

//   // UPDATE
//   if (id) {
//     cabinQuery = cabinQuery
//       .update({ ...newCabin, image: imagePath })
//       .eq("id", id);
//   }

//   //   always returns the final saved row from the database, regardless of whether you:
//   // created a cabin
//   // edited an existing cabin
//   const { data: cabinData, error } = await cabinQuery.select().single();

//   if (error) {
//     console.error(error);
//     throw new Error("Cabin could not be saved");
//   }

//   // Upload ONLY if new image
//   if (!hasImagePath) {
//     const { error: storageError } = await supabase.storage
//       .from("cabin-images")
//       .upload(imageName, newCabin.image);

//     if (storageError) {
//       if (!id) {
//         await supabase.from("cabins").delete().eq("id", cabinData.id);
//       }
//       console.error(storageError);
//       throw new Error("Image upload failed. Changes reverted.");
//     }
//   }

//   // this cabin data we get when we create or edit the cabin
//   return cabinData;
// }

export async function createEditCabin(newCabin, id) {
  // const hasImagePath =
  //   typeof newCabin.image === "string" &&
  //   newCabin.image.startsWith(supabaseUrl);

  // console.log(newCabin, id);

  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Date.now()}-${newCabin.image.name}`.replaceAll("/", "");

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let cabinQuery = supabase.from("cabins");

  // CREATE
  if (!id) {
    cabinQuery = cabinQuery.insert([{ ...newCabin, image: imagePath }]);
  }

  // UPDATE
  if (id) {
    cabinQuery = cabinQuery
      .update({ ...newCabin, image: imagePath })
      .eq("id", id);
  }

  // always returns the final saved row from the database, regardless of whether you:
  // created a cabin
  // edited an existing cabin
  const { data: cabinData, error } = await cabinQuery.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be saved");
  }

  if (hasImagePath) {
    return cabinData;
  }
  
  // Upload ONLY if new image
  if (!hasImagePath) {
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image);

    if (storageError) {
      if (!id) {
        await supabase.from("cabins").delete().eq("id", cabinData.id);
      }
      console.error(storageError);
      throw new Error("Image upload failed. Changes reverted.");
    }
  }

  // this cabin data we get when we create or edit the cabin
  return cabinData;
}
