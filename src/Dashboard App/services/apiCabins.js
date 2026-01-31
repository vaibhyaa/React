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

export async function createCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    "",
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. create the cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  if (error) {
    console.log(error);
    throw new Error("cabins could not be created..!");
  }

  // then we upload the image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3.delete the cabin their was an error uploading the corresponding error
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error("Cabin could not be created because image upload failed ");
  }
  return data;
}

// export async function createCabin(newCabin) {
//   const imageFile = newCabin.image;
//   const imageName = `${Date.now()}-${imageFile.name}`.replaceAll("/", "");

//   try {
//     // 1️⃣ Upload image to Supabase Storage
//     const { data: uploadData, error: storageError } = await supabase.storage
//       .from("cabin-images") // your bucket name
//       .upload(imageName, imageFile);

//     if (storageError) throw storageError;

//     // 2️⃣ Get the public URL
//     const { publicUrl } = supabase.storage
//       .from("cabin-images")
//       .getPublicUrl(imageName);

//     // 3️⃣ Insert cabin into DB with the image URL
//     const { data, error } = await supabase
//       .from("cabins")
//       .insert([{ ...newCabin, image: publicUrl }])
//       .select();

//     if (error) throw error;

//     return data;
//   } catch (err) {
//     console.error(err);
//     throw new Error(err.message || "Something went wrong");
//   }
// }
