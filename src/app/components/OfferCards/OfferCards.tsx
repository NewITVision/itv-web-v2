/**
 * FeatureCards Component
 *
 * @author https://www.reactbits.dev/
 *
 */

import React, { useRef, useEffect, useCallback, ReactNode, RefObject } from 'react';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';

interface ParticleCardProps {
	children: ReactNode;
	className?: string;
	disableAnimations?: boolean;
}

interface GlobalSpotlightProps {
	gridRef: RefObject<HTMLDivElement | null>;
}

const ParticleCard: React.FC<ParticleCardProps> = ({
	children,
	className = '',
	disableAnimations = false,
}) => {
	const cardRef = useRef<HTMLDivElement>(null);
	const particlesRef = useRef<HTMLDivElement[]>([]);
	const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
	const isHoveredRef = useRef<boolean>(false);
	const memoizedParticles = useRef<HTMLSpanElement[]>([]);
	const particlesInit = useRef<boolean>(false);

	const createParticle = useCallback((x: number, y: number): HTMLSpanElement => {
		const el = document.createElement('span');
		el.className = 'particle';
		el.style.cssText = `
      position:absolute;width:4px;height:4px;border-radius:50%;
      background:rgba(38, 103, 255,1);box-shadow:0 0 6px rgba(38, 103, 255,.6);
      pointer-events:none;z-index:100;left:${x}px;top:${y}px;
    `;
		return el;
	}, []);

	const memoizeParticles = useCallback((): void => {
		if (particlesInit.current || !cardRef.current) return;
		const { width, height } = cardRef.current.getBoundingClientRect();
		Array.from({ length: 32 }).forEach(() => {
			memoizedParticles.current.push(
				createParticle(Math.random() * width, Math.random() * height),
			);
		});
		particlesInit.current = true;
	}, [createParticle]);

	const clearParticles = useCallback((): void => {
		timeoutsRef.current.forEach(clearTimeout);
		timeoutsRef.current = [];
		particlesRef.current.forEach((p: HTMLDivElement) =>
			gsap.to(p, {
				scale: 0,
				opacity: 0,
				duration: 0.3,
				ease: 'back.in(1.7)',
				onComplete: () => {
					if (p.parentNode) {
						p.parentNode.removeChild(p);
					}
				},
			}),
		);
		particlesRef.current = [];
	}, []);

	const animateParticles = useCallback((): void => {
		if (!cardRef.current || !isHoveredRef.current) return;
		if (!particlesInit.current) memoizeParticles();

		memoizedParticles.current.forEach((particle: HTMLSpanElement, i: number) => {
			const id: NodeJS.Timeout = setTimeout(() => {
				if (!isHoveredRef.current || !cardRef.current) return;
				const clone = particle.cloneNode(true) as HTMLDivElement;
				cardRef.current.appendChild(clone);
				particlesRef.current.push(clone);

				gsap.set(clone, { scale: 0, opacity: 0 });
				gsap.to(clone, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });
				gsap.to(clone, {
					x: (Math.random() - 0.5) * 100,
					y: (Math.random() - 0.5) * 100,
					rotation: Math.random() * 360,
					duration: 2 + Math.random() * 2,
					ease: 'none',
					repeat: -1,
					yoyo: true,
				});
				gsap.to(clone, {
					opacity: 0.3,
					duration: 1.5,
					ease: 'power2.inOut',
					repeat: -1,
					yoyo: true,
				});
			}, i * 100);
			timeoutsRef.current.push(id);
		});
	}, [memoizeParticles]);

	useEffect(() => {
		if (disableAnimations || !cardRef.current) return;

		const handleIn = (): void => {
			isHoveredRef.current = true;
			animateParticles();
		};
		const handleOut = (): void => {
			isHoveredRef.current = false;
			clearParticles();
		};

		const node = cardRef.current;
		node.addEventListener('mouseenter', handleIn);
		node.addEventListener('mouseleave', handleOut);
		return () => {
			isHoveredRef.current = false;
			node.removeEventListener('mouseenter', handleIn);
			node.removeEventListener('mouseleave', handleOut);
			clearParticles();
		};
	}, [animateParticles, clearParticles, disableAnimations]);

	return (
		<div
			ref={cardRef}
			className={`${className} particle-container`}
			style={{ position: 'relative', overflow: 'hidden' }}
		>
			{children}
		</div>
	);
};

const GlobalSpotlight: React.FC<GlobalSpotlightProps> = ({ gridRef }) => {
	const spotlightRef = useRef<HTMLDivElement | null>(null);
	const isInsideSectionRef = useRef<boolean>(false);
	const animationFrameRef = useRef<number>(0);
	const lastMousePos = useRef({ x: 0, y: 0 });

	useEffect(() => {
		if (!gridRef?.current) return;

		const spotlight = document.createElement('div');
		spotlight.className = 'global-spotlight';
		spotlight.style.cssText = `
      position:fixed;width:800px;height:800px;border-radius:50%;pointer-events:none;
      background:radial-gradient(circle,rgba(38, 103, 255,.15) 0%,rgba(38, 103, 255,.08) 15%,
      rgba(38, 103, 255,.04) 25%,rgba(38, 103, 255,.02) 40%,rgba(38, 103, 255,.01) 65%,transparent 70%);
      z-index:200;opacity:0;transform:translate(-50%,-50%);mix-blend-mode:screen;
      will-change:transform,opacity;
    `;
		document.body.appendChild(spotlight);
		spotlightRef.current = spotlight;

		// Throttled animation function
		const updateSpotlight = () => {
			if (!spotlightRef.current || !gridRef.current) return;

			const { x: mouseX, y: mouseY } = lastMousePos.current;
			const section = gridRef.current.closest('.offer-cards') as HTMLElement;

			if (!section) return;

			const rect = section.getBoundingClientRect();
			const inside =
				mouseX >= rect.left &&
				mouseX <= rect.right &&
				mouseY >= rect.top &&
				mouseY <= rect.bottom;

			isInsideSectionRef.current = inside;
			const cards = gridRef.current.querySelectorAll(
				'.offer-card__item',
			) as NodeListOf<HTMLElement>;

			if (!inside) {
				gsap.to(spotlightRef.current, {
					opacity: 0,
					duration: 0.3,
					ease: 'power2.out',
					overwrite: true,
				});
				cards.forEach((card: HTMLElement) =>
					card.style.setProperty('--glow-intensity', '0'),
				);
				return;
			}

			// Update spotlight position using direct style manipulation for smoothness
			spotlightRef.current.style.left = `${mouseX}px`;
			spotlightRef.current.style.top = `${mouseY}px`;

			let minDist = Infinity;
			const prox = 100;
			const fade = 150;

			cards.forEach((card: HTMLElement) => {
				const r = card.getBoundingClientRect();
				const cx = r.left + r.width / 2;
				const cy = r.top + r.height / 2;
				const d = Math.hypot(mouseX - cx, mouseY - cy) - Math.max(r.width, r.height) / 2;
				const ed = Math.max(0, d);
				minDist = Math.min(minDist, ed);

				const rx = ((mouseX - r.left) / r.width) * 100;
				const ry = ((mouseY - r.top) / r.height) * 100;
				let glow = 0;
				if (ed <= prox) glow = 1;
				else if (ed <= fade) glow = (fade - ed) / (fade - prox);

				// Use requestAnimationFrame for smooth CSS updates
				card.style.setProperty('--glow-x', `${rx}%`);
				card.style.setProperty('--glow-y', `${ry}%`);
				card.style.setProperty('--glow-intensity', glow.toString());
			});

			const target =
				minDist <= prox
					? 0.8
					: minDist <= fade
						? ((fade - minDist) / (fade - prox)) * 0.8
						: 0;

			// Only animate opacity, not position
			gsap.to(spotlightRef.current, {
				opacity: target,
				duration: 0.1,
				ease: 'none',
				overwrite: true,
			});
		};

		const move = (e: MouseEvent): void => {
			lastMousePos.current = { x: e.clientX, y: e.clientY };

			// Cancel previous frame and request new one
			if (animationFrameRef.current) {
				cancelAnimationFrame(animationFrameRef.current);
			}

			animationFrameRef.current = requestAnimationFrame(updateSpotlight);
		};

		const leave = (): void => {
			console.log('Mouse left document');
			isInsideSectionRef.current = false;
			const cards = gridRef.current?.querySelectorAll(
				'.offer-card__item',
			) as NodeListOf<HTMLElement>;
			cards?.forEach((card: HTMLElement) => card.style.setProperty('--glow-intensity', '0'));
			if (spotlightRef.current) {
				gsap.to(spotlightRef.current, { opacity: 0, duration: 0.3, ease: 'power2.out' });
			}
		};

		document.addEventListener('mousemove', move);
		document.addEventListener('mouseleave', leave);

		return () => {
			document.removeEventListener('mousemove', move);
			document.removeEventListener('mouseleave', leave);
			if (spotlightRef.current?.parentNode) {
				spotlightRef.current.parentNode.removeChild(spotlightRef.current);
			}
		};
	}, [gridRef]);

	return null;
};

const OfferCards: React.FC = () => {
	const gridRef = useRef<HTMLDivElement>(null);
	const { t } = useTranslation();

	return (
		<div className="offer-cards">
			<GlobalSpotlight gridRef={gridRef} />

			<div ref={gridRef}>
				<ParticleCard className="offer-card__item">
					<h3 className="offer-card__item-title">{t('offer.offer_themes_title')}</h3>
					<p>{t('offer.offer_themes_content')}</p>
				</ParticleCard>

				<ParticleCard className="offer-card__item">
					<h3 className="offer-card__item-title">{t('offer.offer_web_title')}</h3>
					<p>{t('offer.offer_web_content')}</p>
				</ParticleCard>

				<ParticleCard className="offer-card__item">
					<h3 className="offer-card__item-title">{t('offer.offer_discord_title')}</h3>
					<p>{t('offer.offer_discord_content')}</p>
				</ParticleCard>
			</div>
		</div>
	);
};

export default OfferCards;
