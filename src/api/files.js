export const fetchFiles = async (path, offset = 0) => {
  return await fetch(
    `https://uptobox.com/api/user/files?token=${process.env.REACT_APP_UPTOBOX_TOKEN}&offset=${offset}&limit=10&path=${path}`
  )
    .then(response => response.json())
}

export const retrieveFolderData = async (folder, offset = 0) => {
  const response = await fetchFiles(folder.fullPath, offset);
  const { currentFolder, files, folders } = response.data;
  return { currentFolder, files, folders };
}