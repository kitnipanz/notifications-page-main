<script lang="ts">
	import Notification from '../lib/Notification.svelte';
	import type { NotificationItem } from '../types/types';
	import { NotificationAction, SubjectType } from '../types/types';

	let data: NotificationItem[] = [
		{
			user: {
				name: 'Mark Webber',
				avatar: './assets/images/avatar-mark-webber.webp'
			},
			action: NotificationAction.React,
			subject: {
				type: SubjectType.Post,
				title: 'My first tournament today!'
			},
			time: '1m ago',
			read: false
		},
		{
			user: {
				name: 'Angela Gray',
				avatar: './assets/images/avatar-angela-gray.webp'
			},
			action: NotificationAction.Follow,
			subject: {
				type: SubjectType.None,
				title: ''
			},
			time: '5m ago',
			read: false
		},
		{
			user: {
				name: 'Jacob Thompson',
				avatar: './assets/images/avatar-jacob-thompson.webp'
			},
			action: NotificationAction.JoinGroup,
			subject: {
				type: SubjectType.Group,
				title: 'Chess Club'
			},
			time: '1 day ago',
			read: false
		},
		{
			user: {
				name: 'Rizky Hasanuddin',
				avatar: './assets/images/avatar-rizky-hasanuddin.webp'
			},
			action: NotificationAction.DirectMessage,
			subject: {
				type: SubjectType.Message,
				data: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
			},
			time: '5 days ago',
			read: true
		},
		{
			user: {
				name: 'Kimberly Smith',
				avatar: './assets/images/avatar-kimberly-smith.webp'
			},
			action: NotificationAction.Comment,
			subject: {
				type: SubjectType.Photo,
				data: './assets/images/image-chess.webp',
				title: 'Your picture'
			},
			time: '1 week ago',
			read: true
		},
		{
			user: {
				name: 'Nathan Peterson',
				avatar: './assets/images/avatar-nathan-peterson.webp'
			},
			action: NotificationAction.React,
			subject: {
				type: SubjectType.Post,
				title: '5 end-game strategies to increase your win rate'
			},
			time: '2 weeks ago',
			read: true
		},
		{
			user: {
				name: 'Anna Kim',
				avatar: './assets/images/avatar-anna-kim.webp'
			},
			action: NotificationAction.LeftGroup,
			subject: {
				type: SubjectType.Group,
				title: 'Chess Club'
			},
			time: '2 weeks ago',
			read: true
		}
	];
</script>

<div class="container">
	<div class="container__inner">
		<div class="title">
			<h3 style="margin-right: 16px; margin-top: 0px; margin-bottom: 0px;">Notifications</h3>
			<span class="counter">
				{data.filter((item) => !item.read).length}
			</span>
		</div>
		<button
			on:click={() => {
				data = data.map((item) => {
					item.read = true;
					return item;
				});
			}}
			class="subject link"
		>
			Mark all as read
		</button>
	</div>
	{#each data as item}
		<Notification {item} />
	{/each}
</div>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
	</style>
</svelte:head>

<style>
	:global(*) {
		font-family: 'Plus Jakarta Sans', sans-serif;
	}
	.title h3 {
		font-size: 24px;
	}
	.container__inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.link {
		background: none;
		border: none;
		cursor: pointer;
		margin-right: 0px;
	}
	.title {
		display: flex;
		align-items: center;
	}
	.container__inner {
		margin-bottom: 30px;
	}
	.counter {
		background: hsl(224, 21%, 14%);
		color: #fff;
		padding: 2px 8px;
		font-size: 16px;
		border-radius: 4px;
	}
	:global(body) {
		font-family: 'Inter', sans-serif;
		background: #F9FAFD;
		margin: 0px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 64px;
	}
	.container {
		background: #fff;
		padding: 30px 30px 0px 30px;
		border-radius: 15px;
		max-width: 730px;
	}

	@media (max-width: 375px) {
		.container {
			padding: 24px 16px 0px 16px;
		}
		.container__inner {
			margin-bottom: 24px;
		}
	}
</style>
