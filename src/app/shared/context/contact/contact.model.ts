export interface ContactData {
  _id: string;
  image: {
    imageUrl: string;
  };
  contactText: object;
  contactMedia: Media[];
}

interface Media {
  mediaName: string;
  mediaLink: string;
}
