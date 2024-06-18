import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-08-pump-static-vertical')
export class Obi08PumpStaticVertical extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M9.2959 2.5C9.2959 1.94772 8.84819 1.5 8.2959 1.5H4.96257C4.41029 1.5 3.96257 1.94772 3.96257 2.5V11.4C3.96257 13.6009 4.82954 15.5968 6.23656 17.0567C7.6894 18.5641 9.71804 19.5 11.9626 19.5C14.2071 19.5 16.2357 18.5641 17.6885 17.0568C19.0956 15.5969 19.9626 13.601 19.9626 11.4C19.9626 6.92649 16.3808 3.3 11.9626 3.3C11.0275 3.3 10.13 3.46242 9.2959 3.76091V2.5Z" fill="currentColor"/>
<path d="M18.9222 22.5C20.18 22.5 20.8792 21.0451 20.0935 20.063L17.6885 17.0568C16.2357 18.5641 14.2071 19.5 11.9626 19.5C9.71804 19.5 7.6894 18.5641 6.23656 17.0567L3.83151 20.063C3.0458 21.0451 3.74506 22.5 5.00282 22.5H18.9222Z" fill="currentColor"/>
<path d="M6.97532 17.7339C8.34295 18.8393 10.0765 19.5 11.9626 19.5C13.8484 19.5 15.5819 18.8394 16.9494 17.7342L19.3124 20.6879C19.5743 21.0152 19.3412 21.5002 18.9219 21.5002H5.00257C4.58332 21.5002 4.35023 21.0152 4.61214 20.6879L6.97532 17.7339Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.2959 2.5V5.18088L9.63285 4.70243C10.3605 4.44204 11.1441 4.3 11.9626 4.3C15.8169 4.3 18.9626 7.46703 18.9626 11.4C18.9626 15.333 15.8169 18.5 11.9626 18.5C8.10825 18.5 4.96257 15.333 4.96257 11.4V2.5H8.2959ZM11.9626 13.5C13.0671 13.5 13.9626 12.6046 13.9626 11.5C13.9626 10.3954 13.0671 9.5 11.9626 9.5C10.858 9.5 9.96257 10.3954 9.96257 11.5C9.96257 12.6046 10.858 13.5 11.9626 13.5Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.2959 2.5C9.2959 1.94772 8.84819 1.5 8.2959 1.5H4.96257C4.41029 1.5 3.96257 1.94772 3.96257 2.5V11.4C3.96257 13.6009 4.82954 15.5968 6.23656 17.0567C7.6894 18.5641 9.71804 19.5 11.9626 19.5C14.2071 19.5 16.2357 18.5641 17.6885 17.0568C19.0956 15.5969 19.9626 13.601 19.9626 11.4C19.9626 6.92649 16.3808 3.3 11.9626 3.3C11.0275 3.3 10.13 3.46242 9.2959 3.76091V2.5Z" style="fill: var(--automation-device-secondary-color)"/>
<path d="M18.9222 22.5C20.18 22.5 20.8792 21.0451 20.0935 20.063L17.6885 17.0568C16.2357 18.5641 14.2071 19.5 11.9626 19.5C9.71804 19.5 7.6894 18.5641 6.23656 17.0567L3.83151 20.063C3.0458 21.0451 3.74506 22.5 5.00282 22.5H18.9222Z" style="fill: var(--automation-device-secondary-color)"/>
<path d="M6.97532 17.7339C8.34295 18.8393 10.0765 19.5 11.9626 19.5C13.8484 19.5 15.5819 18.8394 16.9494 17.7342L19.3124 20.6879C19.5743 21.0152 19.3412 21.5002 18.9219 21.5002H5.00257C4.58332 21.5002 4.35023 21.0152 4.61214 20.6879L6.97532 17.7339Z" style="fill: var(--automation-device-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.2959 2.5V5.18088L9.63285 4.70243C10.3605 4.44204 11.1441 4.3 11.9626 4.3C15.8169 4.3 18.9626 7.46703 18.9626 11.4C18.9626 15.333 15.8169 18.5 11.9626 18.5C8.10825 18.5 4.96257 15.333 4.96257 11.4V2.5H8.2959ZM11.9626 13.5C13.0671 13.5 13.9626 12.6046 13.9626 11.5C13.9626 10.3954 13.0671 9.5 11.9626 9.5C10.858 9.5 9.96257 10.3954 9.96257 11.5C9.96257 12.6046 10.858 13.5 11.9626 13.5Z" style="fill: var(--automation-device-primary-color)"/>
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
    'obi-08-pump-static-vertical': Obi08PumpStaticVertical;
  }
}
