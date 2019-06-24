import { trigger, transition, query, style, animate, group } from '@angular/animations';

const forwards = [
	group([
		query(':enter', [style({ transform: "translateX(100%)" })], { optional: true }),
		query(':leave', [
			style({ transform: "translateX(0)" }),
			animate('0.3s', style({ transform: "translateX(-100%)" }))
		], { optional: true }),
		query(':enter', [
			style({ transform: "translateX(100%)" }),
			animate('0.3s', style({ transform: "translateX(0)" }))
		], { optional: true })
	])
];

const backwards = [
	group([
		query(':enter', [style({ transform: "translateX(-100%)" })], { optional: true }),
		query(':leave', [
			style({ transform: "translateX(0)" }),
			animate('0.3s', style({ transform: "translateX(100%)" }))
		], { optional: true }),
		query(':enter', [
			style({ transform: "translateX(-100%)" }),
			animate('0.3s', style({ transform: "translateX(0)" }))
		], { optional: true })
	])
];

export const slideInAnimation = trigger('routeAnimations', [
	transition('Home => Learn', forwards),
	transition('Learn => Home', backwards),
	transition("Learn => LearnSection", forwards),
	transition("LearnSection => Learn", backwards),

	transition('Home => Practice', forwards),
	transition('Practice => Home', backwards),
	transition("Practice => PracticeSection", forwards),
	transition("PracticeSection => Practice", backwards),

	transition('* => *', forwards)
]);