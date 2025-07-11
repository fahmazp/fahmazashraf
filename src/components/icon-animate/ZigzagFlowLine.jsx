import AnimateSvg from "./zigzagShape";

export default function ZigzagFlowLine() {
  return (
<AnimateSvg
  width="100%"
  height="100%"
  viewBox="0 0 96 40"
  className="w-[45px] md:w-[75px] h-[50px] absolute bottom-0 left-1/2 ml-7 sm:ml-1 my-svg-animation"
  path="M93.0681 3C72.3063 18.0061 57.7731 25.925 32.2716 21.1435C26.0822 19.983 15.9133 18.8754 10.945 14.459C8.12295 11.9505 3.74946 11.7165 9.24741 9.57834C13.7751 7.81753 20.3406 4.90981 25.2689 4.90981C27.0487 4.90981 9.62202 9.55411 4.26061 10.7455C-2.59384 12.2686 20.5637 33.6269 24.314 37.3771"
  strokeColor="currentColor"
  strokeWidth={3}
  strokeLinecap="round"
  animationDuration={1.5}
  animationDelay={0}
  animationBounce={0.3}
  reverseAnimation={false}
  enableHoverAnimation={true}
  hoverAnimationType="redraw"
  hoverStrokeColor="#4f46e5"
/>
  )
}