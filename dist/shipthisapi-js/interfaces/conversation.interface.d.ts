export interface ConversationPayload {
    conversation: {
        type: string;
        body: string;
    };
    document_id: string;
    view_name: string;
    message_type: string;
}
