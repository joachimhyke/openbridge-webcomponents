import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-08-pump-on-horisontal')
export class Obi08PumpOnHorisontal extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9222 22.5C20.18 22.5 20.8792 21.0451 20.0935 20.063L17.6885 17.0568C16.2357 18.5641 14.2071 19.5 11.9626 19.5C9.71804 19.5 7.6894 18.5641 6.23656 17.0567L3.83151 20.063C3.0458 21.0451 3.74506 22.5 5.00282 22.5H18.9222Z" fill="currentColor"/>
<path d="M20.9626 8.83333C21.5149 8.83333 21.9626 8.38562 21.9626 7.83333V4.5C21.9626 3.94772 21.5149 3.5 20.9626 3.5L12.0626 3.5C9.86166 3.5 7.86576 4.36697 6.40589 5.77399C4.89848 7.22683 3.96257 9.25547 3.96257 11.5C3.96257 13.7445 4.89845 15.7731 6.40582 17.2259C7.86569 18.633 9.86162 19.5 12.0626 19.5C16.5361 19.5 20.1626 15.9183 20.1626 11.5C20.1626 10.565 20.0002 9.66741 19.7017 8.83333H20.9626Z" fill="currentColor"/>
<path d="M6.97532 17.7339C8.34295 18.8393 10.0765 19.5 11.9626 19.5C13.8484 19.5 15.5819 18.8394 16.9494 17.7342L19.3124 20.6879C19.5743 21.0152 19.3412 21.5002 18.9219 21.5002H5.00257C4.58332 21.5002 4.35023 21.0152 4.61214 20.6879L6.97532 17.7339Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.9626 7.83333H18.2817L18.7601 9.17028C19.0205 9.89789 19.1626 10.6816 19.1626 11.5C19.1626 15.3543 15.9955 18.5 12.0626 18.5C8.1296 18.5 4.96257 15.3543 4.96257 11.5C4.96257 7.64568 8.1296 4.5 12.0626 4.5L20.9626 4.5V7.83333ZM9.96257 11.5C9.96257 12.6046 10.858 13.5 11.9626 13.5C13.0671 13.5 13.9626 12.6046 13.9626 11.5C13.9626 10.3954 13.0671 9.5 11.9626 9.5C10.858 9.5 9.96257 10.3954 9.96257 11.5Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9222 22.5C20.18 22.5 20.8792 21.0451 20.0935 20.063L17.6885 17.0568C16.2357 18.5641 14.2071 19.5 11.9626 19.5C9.71804 19.5 7.6894 18.5641 6.23656 17.0567L3.83151 20.063C3.0458 21.0451 3.74506 22.5 5.00282 22.5H18.9222Z" style="fill: var(--automation-device-tertiary-color)"/>
<path d="M20.9626 8.83333C21.5149 8.83333 21.9626 8.38562 21.9626 7.83333V4.5C21.9626 3.94772 21.5149 3.5 20.9626 3.5L12.0626 3.5C9.86166 3.5 7.86576 4.36697 6.40589 5.77399C4.89848 7.22683 3.96257 9.25547 3.96257 11.5C3.96257 13.7445 4.89845 15.7731 6.40582 17.2259C7.86569 18.633 9.86162 19.5 12.0626 19.5C16.5361 19.5 20.1626 15.9183 20.1626 11.5C20.1626 10.565 20.0002 9.66741 19.7017 8.83333H20.9626Z" style="fill: var(--automation-device-tertiary-color)"/>
<path d="M6.97532 17.7339C8.34295 18.8393 10.0765 19.5 11.9626 19.5C13.8484 19.5 15.5819 18.8394 16.9494 17.7342L19.3124 20.6879C19.5743 21.0152 19.3412 21.5002 18.9219 21.5002H5.00257C4.58332 21.5002 4.35023 21.0152 4.61214 20.6879L6.97532 17.7339Z" style="fill: var(--automation-device-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.9626 7.83333H18.2817L18.7601 9.17028C19.0205 9.89789 19.1626 10.6816 19.1626 11.5C19.1626 15.3543 15.9955 18.5 12.0626 18.5C8.1296 18.5 4.96257 15.3543 4.96257 11.5C4.96257 7.64568 8.1296 4.5 12.0626 4.5L20.9626 4.5V7.83333ZM9.96257 11.5C9.96257 12.6046 10.858 13.5 11.9626 13.5C13.0671 13.5 13.9626 12.6046 13.9626 11.5C13.9626 10.3954 13.0671 9.5 11.9626 9.5C10.858 9.5 9.96257 10.3954 9.96257 11.5Z" style="fill: var(--automation-device-primary-color)"/>
</svg>
`;

  override render() {
    return html`
      <div class="wrapper">${this.useCssColor ? this.iconCss : this.icon}</div>
    `;
  }

  static override styles = css`
    .wrapper {
      height: 100%;
      width: 100%;
      line-height: 0;
    }
    .wrapper > * {
      height: 100%;
      width: 100%;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'obi-08-pump-on-horisontal': Obi08PumpOnHorisontal;
  }
}
