export interface ContactData {
  _id: string;
  image: {
    imageUrl: string;
  };
  contactText: object;
  contactMedias: Media[];
}

interface Media {
  mediaName: string;
  mediaLink: string;
  contact:string;
}
