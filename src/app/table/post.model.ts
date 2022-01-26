export interface Post {
    attachments: any[],
    avatar_url: string,
    created_at: number,
    favorited_by: any[],
    group_id: string,
    id: string,
    name: string,
    sender_id: string,
    sender_type: string,
    source_guid: string,
    system: boolean,
    text: string,
    user_id: string,
    platform: string
}