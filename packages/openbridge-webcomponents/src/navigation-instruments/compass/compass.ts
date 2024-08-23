import {LitElement, css, html, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '../watch/watch';
import {Tickmark, TickmarkType} from '../watch/tickmark';
import {arrow, ArrowStyle} from './arrow';

@customElement('obc-compass')
export class ObcCompass extends LitElement {
  @property({type: Number}) heading = 0;
  @property({type: Number}) COG = 0;
  @property({type: Boolean}) touching: boolean = false;
  @property({type: Boolean}) disableAutoAtSetpoint: boolean = false;
  @property({type: Number}) autoAtSetpointDeadband: number = 2;

  override render() {
    const crossHair = svg`
      <line
        x1="46"
        y1="256"
        x2="466"
        y2="256"
        stroke="#D9D9D9"
        stroke-width="1"
        vector-effect="non-scaling-stroke"
      />
      <line
        x1="256"
        y1="46"
        x2="256"
        y2="466"
        stroke="#D9D9D9"
        stroke-width="1"
        vector-effect="non-scaling-stroke"
      />
    `;

    const northArrow = svg`
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M223.961 70.7192L256 28L288.039 70.7192C277.627 68.9314 266.922 68 256 68C245.078 68 234.373 68.9314 223.961 70.7192Z"
        fill="#707070"
        transform="translate(0, -28)"
        vector-effect="non-scaling-stroke"
      />
      <path
        d="M261.003 57H258.091L252.987 48.264H252.923C252.934 48.52 252.944 48.7813 252.955 49.048C252.966 49.3147 252.976 49.5867 252.987 49.864C253.008 50.1307 253.024 50.4027 253.035 50.68C253.046 50.9573 253.056 51.2347 253.067 51.512V57H251.003V45.576H253.899L258.987 54.232H259.035C259.024 53.9867 259.014 53.736 259.003 53.48C258.992 53.2133 258.982 52.952 258.971 52.696C258.971 52.4293 258.966 52.1627 258.955 51.896C258.944 51.6293 258.934 51.3627 258.923 51.096V45.576H261.003V57Z"
        fill="white"
        transform="translate(0, -28)"
        vector-effect="non-scaling-stroke"
      />
    `;

    const tickmarks: Tickmark[] = [
      {angle: 360, type: TickmarkType.main},
      {angle: 90, type: TickmarkType.main, text: 'E'},
      {angle: 180, type: TickmarkType.main, text: 'S'},
      {angle: 270, type: TickmarkType.main, text: 'W'},
    ];

    return html`
      <div class="container">
        <obc-watch .padding=${48} .tickmarks=${tickmarks}></obc-watch>
        <svg class="compass" viewBox="0 0 512 512">
          ${northArrow}${crossHair}${arrow(
            ArrowStyle.HDG,
            this.heading,
            256,
            256
          )}
          ${arrow(ArrowStyle.COG, this.COG, 256, 256)}
        </svg>
      </div>
    `;
  }

  static override styles = css`
    * {
      box-sizing: border-box;
    }

    .container {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .container > * {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'obc-compass': ObcCompass;
  }
}
