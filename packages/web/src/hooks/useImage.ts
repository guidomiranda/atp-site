export const useImage = async (fileImage: string | Blob, folder: string) => {
	const url = 'https://api.cloudinary.com/v1_1/https-atp-com-py/image/upload';
	const formData = new FormData();
	formData.append('file', fileImage as string | Blob);
	formData.append('upload_preset', folder);

	const res = await fetch(url as string, {
		method: 'POST',
		body: formData,
	});

	const imageData = await res.json();

	return imageData.secure_url;
};
