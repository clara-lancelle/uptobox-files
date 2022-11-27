import { useEffect, useState, createRef } from 'react';
import { retrieveFolderData } from '../api/files';

const TreeItem = ({ folder }) => {
  const uniqueRef = createRef();
  const [showNested, setShowNested] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const constructSubItems = async () => {
      const data = await retrieveFolderData(folder);
      setData(data);
    }

    constructSubItems();
  }, [folder]);

  if (data === null) {
    return <></>;
  }

  return (
    <li ref={uniqueRef}>
      <span className={`caret ${showNested && 'caret-down'}`} onClick={ () => setShowNested(!showNested) }>/{ data.currentFolder.name }</span>
        <ul className={`nested ${showNested && 'active'}`}>
          {data.folders.map((folder) => (
            <TreeItem folder={folder} />
          ))}
          {data.files.map((element) => (
            <li>
              {element.file_name}<a href="#">(lire)</a>
            </li>
          ))}
        </ul>
    </li>
  );
}

export default TreeItem;
