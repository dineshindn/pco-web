import { Button, Col, message, Row, Upload } from "antd";
import { InboxOutlined } from '@ant-design/icons';
import UploadIcon from '../../images/quotulator/upload_file.svg';
import DeleteIcon from '../../images/quotulator/delete.svg';
import { useEffect, useState } from "react";
import { FileIcon, defaultStyles } from 'react-file-icon';
import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const UploadFiles = ({getDocs, getDrawings}) => {

  const { Dragger } = Upload;

  const [fileListDrawings, setFileListDrawings] = useState([]);

  const [fileList, setFileList] = useState([]);

  const props = {
    name: 'file',
    multiple: true,
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
      setFileList(info.fileList.filter((item) => item.status !== 'success'));
    },
    showUploadList: false
  };

  const propsDrawings = {
    name: 'file',
    multiple: true,
    beforeUpload: (file) => {
      setFileListDrawings([...fileListDrawings, file]);
      return false;
    },
    fileListDrawings,
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
      setFileListDrawings(info.fileList.filter((item) => item.status !== 'success'));
    },
    showUploadList: false
  };

  console.log(fileList, fileListDrawings, "filelist")

  useEffect(() => {
    getDocs(fileList)
    getDrawings(fileListDrawings)
  }, [fileList, fileListDrawings])

  const removeFileItem = (file) => {
    let arr = [...fileList];
    const index = arr.indexOf(file);
    const newFileList = arr.slice();
    newFileList.splice(index, 1);
    setFileList(newFileList);
  }

  const removeFileItemDrawings = (file) => {
    let arr = [...fileListDrawings];
    const index = arr.indexOf(file);
    const newFileList = arr.slice();
    newFileList.splice(index, 1);
    setFileListDrawings(newFileList);
  }

  return(
    <Row>
      <Col span={12} style={{padding: "0px 40px"}}>
        <UploadDragWrapper>
          <LabelItem>Upload Documents - NDA, Bill of Material, etc., <span>(Optional)</span></LabelItem>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <img src={UploadIcon} alt="upload" style={{width: "24px", height: "24px"}} />
            </p>
            <p className="ant-upload-text">Drag & Drop or Click here to upload files</p>
          </Dragger>
        </UploadDragWrapper>
        <UploadListWrapper>
          <LabelItem>Uploaded Documents</LabelItem>
          <UploadListItems>
            {fileList.length > 0 && fileList.map((fileItem, i) =>
              <ListItem key={i}>
                <span className="icon">
                  <FileIcon extension={fileItem.name.split('.').pop()} {...defaultStyles[fileItem.name.split('.').pop()]} />
                </span>
                <h4 className="name">{fileItem.name}</h4>
                <span>
                  {
                    fileItem.size > 1000000 ? (fileItem.size / Math.pow(1024,2)).toFixed(2) + " MB" :
                    (fileItem.size / Math.pow(1024,1)).toFixed(2) + " KB"
                  }
                </span>
                <Button onClick={() => removeFileItem(fileItem)}  icon={<img src={DeleteIcon} alt="delete" />} />
              </ListItem>
            )}
          </UploadListItems>
        </UploadListWrapper>
      </Col>
      <Col span={12} style={{borderLeft: "1px solid rgba(70, 107, 164, 0.2)", padding: "0px 40px"}}>
        <UploadDragWrapper>
          <LabelItem>Upload Drawings <span>(Optional)</span></LabelItem>
          <Dragger {...propsDrawings}>
            <p className="ant-upload-drag-icon">
              <img src={UploadIcon} alt="upload" style={{width: "24px", height: "24px"}} />
            </p>
            <p className="ant-upload-text">Drag & Drop or Click here to upload files</p>
          </Dragger>
        </UploadDragWrapper>
        <UploadListWrapper>
          <LabelItem>Uploaded Drawings</LabelItem>
          <UploadListItems>
            {fileListDrawings.length > 0 && fileListDrawings.map((fileItem, i) =>
              <ListItem key={i}>
                <span className="icon">
                  <FileIcon extension={fileItem.name.split('.').pop()} {...defaultStyles[fileItem.name.split('.').pop()]} />
                </span>
                <h4 className="name">{fileItem.name}</h4>
                <span>
                  {
                    fileItem.size > 1000000 ? (fileItem.size / Math.pow(1024,2)).toFixed(2) + " MB" :
                    (fileItem.size / Math.pow(1024,1)).toFixed(2) + " KB"
                  }
                </span>
                <Button onClick={() => removeFileItemDrawings(fileItem)}  icon={<img src={DeleteIcon} alt="delete" />} />
              </ListItem>
            )}
          </UploadListItems>
        </UploadListWrapper>
      </Col>
    </Row>
  )
};

const LabelItem = styled.label`
  font-family: ${palette.FONT_FAMILY};
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #0E1521;
  margin-bottom: 12px;
  display: inline-block;
`;

const UploadDragWrapper = styled.div`
  .ant-upload {
    background: #F4F6F8;
    border-radius: 8px;
    height: 80px;
    display: flex !important;
    align-items: center;
    justify-content: center;
  }
  .ant-upload-drag-container {
    display: flex !important;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }
  .ant-upload-drag-icon {
    margin-bottom: 0 !important;
  }
`;

const UploadListWrapper = styled.div`
  margin: 24px 0px;
`;

const UploadListItems = styled.div`
  background: rgba(244, 246, 248, 0.5);
  border-radius: 8px;
  min-height: 283px;
  padding: 20px;
`;

const ListItem = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 6fr 2fr 1fr;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  padding: 14px 0px;
  border-bottom: 1px solid #E0E8E8;
  width: 100%;
  &:last-child {
    border-bottom: none;
  }
  .icon {
    svg {
      width: 30px;
      height: 30px;
      max-width: 30px !important;
    }
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .name {
    font-family: ${palette.FONT_FAMILY};
    font-weight: 500;
    font-size: 14.8389px;
    line-height: 20px;
    color: #484848;
    word-break: break-all;
  }
  .ant-btn {
    border: none;
    background: transparent;
    width: 24px;
    outline: none;
    box-shadow: none;
  }
`;
