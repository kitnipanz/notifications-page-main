export interface NotificationItem {
	user: {
		name: string;
		avatar: string;
	}
	action: NotificationAction;
	subject: Subject,
	read: boolean;
	time: string;
}
export interface Subject {
	type: SubjectType;
	title?: string;
	data?: string;
}

export enum SubjectType {
	Post = 'post',
	Comment = 'comment',
	Group = 'group',
	User = 'user',
	Photo = 'photo',
	None = 'none',
	Message = 'message'
}

export enum NotificationAction {
	Like = 'like',
	React = 'react',
	Comment = 'comment',
	Follow = 'follow',
	JoinGroup = 'join_group',
	LeftGroup = 'left_group',
	DirectMessage = 'direct_message'
}