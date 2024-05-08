interface IProps {
    id: number;
    title: string;
    description: string;
    status: string;
}

export class TodoDto {
    id: number;
    title: string;
    description: string;
    status: string;

    constructor(props: IProps) {
        this.id = props.id;
        this.title = props.title;
        this.description = props.description;
        this.status = props.status;
    }

    static fromJson(json: any): TodoDto {
        return new TodoDto({
            id: json.id,
            title: json.title,
            description: json.description,
            status: json.status
        });
    }

    static fromJsonList(json: any[]): TodoDto[] {
        return json.map((item) => TodoDto.fromJson(item));
    }
}