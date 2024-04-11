<script lang="ts">
	import {
		NotificationAction,
		SubjectType,
		type NotificationItem,
		type Subject
	} from '../types/types';
	export let item: NotificationItem;

	const renderAction = (action: NotificationAction) => {
		switch (action) {
			case NotificationAction.React:
				return 'reacted to your recent post';
			case NotificationAction.Follow:
				return 'followed you';
			case NotificationAction.JoinGroup:
				return 'has joined your group';
			case NotificationAction.DirectMessage:
				return 'sent you a private message';
			case NotificationAction.Comment:
				return 'commented on your picture';
			case NotificationAction.LeftGroup:
				return 'left the group';
			default:
				return '';
		}
	};

	const renderSubject = (subject: Subject) => {
		switch (subject.type) {
			case SubjectType.Post:
				return `<span class="subject">${subject.title}</span>`;
			case SubjectType.Group:
				return `<span class="subject">${subject.title}</span>`;
			default:
				return '';
		}
	};

	const renderFooter = (subject: Subject) => {
		switch (subject.type) {
			case SubjectType.Message:
				return `<span class="message">${subject.data}</span>`;
			default:
				return '';
		}
	};
</script>

<div class="notification {item.read ? 'read' : 'unread'}">
	<div class="notification__user">
		<img class="avatar" src={item.user.avatar} alt={item.user.name} />
	</div>
	<div class="notification__content">
		<div class="notification__content--inner">
			<div>
				<span class="name">{item.user.name}</span>
				<span class="action {renderAction(item.action) === '' ? 'hide' : ''}">
					{renderAction(item.action)}
				</span>
				{@html renderSubject(item.subject)}

				{#if !item.read}
					<span class="notification__dot"></span>
				{/if}

				<div class="notification__time">
					{item.time}
				</div>
			</div>

			{#if item.subject.type === SubjectType.Photo}
				<img class="thumbnail" src={item.subject.data} alt={item.subject.title} />
			{/if}
		</div>

		<div>
			{@html renderFooter(item.subject)}
		</div>
	</div>
</div>

<style>
	.notification {
		display: flex;
		align-items: center;
		align-items: start;
		border-radius: 8px;
		padding: 18px 20px;
		margin-bottom: 8px;
	}

	.notification__content {
		width: 100%;
		margin-bottom: 8px;
	}
	.notification__content--inner {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.notification__dot {
		display: inline-block;
		margin-top: 4px;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background-color: #f65552;
	}
	.notification__user {
		display: flex;
		align-items: center;
		margin-right: 19px;
	}
	.notification__user .avatar {
		width: 45px;
		border-radius: 50%;
	}
	.notification.unread {
		background-color: hsl(210, 60%, 98%);
	}
	.notification__time {
		margin-top: 4px;
		color: #939cad;
	}

	.name {
		cursor: pointer;
		margin-right: 16px;
		font-weight: 600;
		color: #1c202b;
	}
	.action {
		color: #5e6778;
		margin-right: 16px;
	}
	.name:hover {
		color: #0a327b;
	}
	.thumbnail {
		width: 45px;
		height: 45px;
		cursor: pointer;
	}

	:global(.message) {
		display: block;
		margin-top: 8px;
		color: #5e6778;
		padding: 18px;
		border-radius: 6px;
		border: 1px solid #e0e0e0;
		cursor: pointer;
	}
	:global(.message:hover) {
		background-color: hsl(211, 68%, 94%);
	}
	:global(.subject) {
		margin-right: 16px;
		font-weight: 600;
		cursor: pointer;
		color: #5E6778;
	}
	:global(.subject:hover) {
		color: #0a327b;
	}
	.hide {
		display: none;
	}

	@media (max-width: 375px) {
		.notification__user {
			margin-right: 13px;
		}
		.notification__user .avatar {
			width: 39px;
			height: 39px;
		}
		.thumbnail {
			width: 39px;
			height: 39px;
		}
		.name {
			margin-right: 8px;
		}
		.action {
			margin-right: 8px;
		}
		:global(.subject) {
			margin-right: 8px;
		}
	}
</style>
