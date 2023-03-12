export interface ContactData {
  _id: string;
  image: {
    imageUrl: string;
  };
  contactText: object;
  medias: Media[];
}

interface Media {
  mediaName: string;
  mediaLink: string;
  contact:string;
  isSocialMedia:boolean;
}
