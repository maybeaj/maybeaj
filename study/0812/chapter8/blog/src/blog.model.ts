export interface PostDto {
    id?: string;
    title: string;
    content: string;
    name: string;
    createdDt?: Date;
    updatedDt?: Date; // 업데이트 날짜는 선택적
}