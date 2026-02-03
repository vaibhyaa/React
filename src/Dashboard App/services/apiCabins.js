import supabase, { supabaseUrl } from "./supabase";
// export async function createEditCabin(newCabin, id) {
//   // const hasImagePath =
//   //   typeof newCabin.image === "string" &&
//   //   newCabin.image.startsWith(supabaseUrl);

//   // console.log(newCabin, id);

//   const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

//   const imageName = `${Date.now()}-${newCabin.image.name}`.replaceAll("/", "");

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

//   // always returns the final saved row from the database, regardless of whether you:
//   // created a cabin
//   // edited an existing cabin
//   const { data: cabinData, error } = await cabinQuery.select().single();

//   if (error) {
//     console.error(error);
//     throw new Error("Cabin could not be saved");
//   }

//   if (hasImagePath) {
//     return cabinData;
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

//   // this cabin data we get when we create or edit the cabin stored in same varible
//   return cabinData;
// }

export async function getCabins() {
  const { data: AllCabinsData, error } = await supabase
    .from("cabins")
    .select("*");

  if (error) {
    console.log(error);
    throw new Error("cabins could not be loaded..!");
  }
  return AllCabinsData;
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

export async function createEditCabin(newCabin, id) {
  // ------------------------------------------------------------
  // STEP 1: Check if the image is already a Supabase URL
  // If image is a string AND starts with supabaseUrl → image already exists
  // Optional chaining (?.) avoids crashes if image is undefined
  // ------------------------------------------------------------
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  // ------------------------------------------------------------
  // STEP 2: Generate a unique image name
  // Date.now() prevents duplicate filenames
  // replaceAll("/") avoids invalid path characters
  // ------------------------------------------------------------
  const imageName = `${Date.now()}-${newCabin.image.name}`.replaceAll("/", "");

  // ------------------------------------------------------------
  // STEP 3: Decide which image path to store in DB
  // - If image already exists → reuse it
  // - If new image → construct public Supabase storage URL
  // ------------------------------------------------------------
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // ------------------------------------------------------------
  // STEP 4: Create a base Supabase query reference
  // This allows us to conditionally chain INSERT or UPDATE
  // ------------------------------------------------------------
  let cabinQuery = supabase.from("cabins");

  // ------------------------------------------------------------
  // STEP 5: CREATE cabin (when no id is provided)
  // Inserts a new row into the "cabins" table
  // ------------------------------------------------------------
  if (!id) {
    cabinQuery = cabinQuery.insert([{ ...newCabin, image: imagePath }]);
  }

  // ------------------------------------------------------------
  // STEP 6: UPDATE cabin (when id exists)
  // Updates the existing row that matches the given id
  // ------------------------------------------------------------
  if (id) {
    cabinQuery = cabinQuery
      .update({ ...newCabin, image: imagePath })
      .eq("id", id);
  }

  // ------------------------------------------------------------
  // STEP 7: Execute the query and fetch the saved row
  // .select().single():
  // - Returns the final saved row
  // - Works for BOTH create and update
  // ------------------------------------------------------------
  const { data: cabinData, error } = await cabinQuery.select().single();

  // ------------------------------------------------------------
  // STEP 8: Handle database error
  // Throwing error makes React Query call onError()
  // ------------------------------------------------------------
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be saved");
  }

  // ------------------------------------------------------------
  // STEP 9: If image already existed, skip upload
  // (This happens during edit when user doesn't change image)
  // ------------------------------------------------------------
  if (hasImagePath) {
    return cabinData;
  }

  // ------------------------------------------------------------
  // STEP 10: Upload new image to Supabase Storage
  // This runs ONLY when a new image file is provided
  // ------------------------------------------------------------
  if (!hasImagePath) {
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image);

    // ----------------------------------------------------------
    // STEP 11: Rollback logic (important!)
    // If image upload fails AFTER DB insert:
    // - Delete the newly created cabin to keep DB consistent
    // ----------------------------------------------------------
    if (storageError) {
      if (!id) {
        await supabase.from("cabins").delete().eq("id", cabinData.id);
      }
      console.error(storageError);
      throw new Error("Image upload failed. Changes reverted.");
    }
  }

  // ------------------------------------------------------------
  // STEP 12: Return final cabin data
  // Same return for BOTH create and edit
  // ------------------------------------------------------------
  return cabinData;
}
