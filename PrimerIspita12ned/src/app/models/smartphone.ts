export class Smartphone {
    id: number;
    brend: string;
    model: string;
    image: string;
    video: string;

    constructor(id: number, brend: string, model: string, image:string, video: string){

        this.id = id;
        this.brend = brend;
        this.model = model;
        this.image = image;
        this.video = video;
    }
}
