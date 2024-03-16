import sha1 from "crypto-js/sha1";

export const getSignatureData = () => {
  const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
  const uploadURL = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`;
  const timestamp = String(+new Date());
  const signature = sha1(
    `timestamp=${timestamp}${process.env.NEXT_PUBLIC_CLOUDINARY_SECRET}`
  ).toString();

  return { uploadURL, apiKey, signature, timestamp };
};
