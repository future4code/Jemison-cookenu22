export interface TaskInputDTO {
    title: string,
    description: string,
    deadline: string,
    authorId: string
}

export interface InsertTaskInputDTO {
    id:string,
    title: string,
    description: string,
    deadline: string,
    author_id: string
}