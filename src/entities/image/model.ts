export interface Image {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  id: string;
  filename: string;
  metadata: string | null;
  bucketName: string;
  chunkSize: number;
  size: number;
  uploadDate: Date;
  contentType: string;
}
