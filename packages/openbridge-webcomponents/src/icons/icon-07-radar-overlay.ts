import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-07-radar-overlay')
export class Obi07RadarOverlay extends LitElement {
  @property({type: Boolean, attribute: 'use-css-color'}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.61074 18.9556L11 19.9169C10.7219 19.2214 10.5521 18.4709 10.5115 17.6862L9.5 17.1332V5.21912L15.4032 6.9682L15.5 6.93377V10.5604C15.8254 10.4893 16.1594 10.4409 16.5 10.4169V6.57821L20 5.33377V10.9895C20.7496 11.3456 21.4259 11.831 22 12.4169V2.5L15.3468 4.86557L8.59684 2.86557L2 5.21111V20.7185L8.61074 18.9556ZM8.5 5.02266V16.9153L4 18.1153V6.62266L8.5 5.02266ZM21.1573 14.139C21.6137 14.822 21.8933 15.6046 21.9749 16.4169H22V16.9125L22 16.9169L22 17.4169H17V16.4169H18.3909C18.3504 16.3042 18.2961 16.1963 18.2289 16.0957C18.0665 15.8527 17.8357 15.6632 17.5656 15.5514C17.2955 15.4395 16.9984 15.4102 16.7117 15.4672C16.4249 15.5243 16.1616 15.665 15.9549 15.8718C15.7482 16.0785 15.6074 16.3418 15.5504 16.6285C15.4933 16.9152 15.5226 17.2124 15.6345 17.4825C15.7464 17.7526 15.9358 17.9834 16.1789 18.1458C16.4219 18.3082 16.7077 18.3949 17 18.3949V19.4169C16.5055 19.4169 16.0222 19.2702 15.6111 18.9955C15.2 18.7208 14.8795 18.3304 14.6903 17.8736C14.5011 17.4168 14.4516 16.9141 14.548 16.4291C14.6445 15.9442 14.8826 15.4987 15.2322 15.1491C15.5819 14.7995 16.0273 14.5614 16.5123 14.4649C16.9972 14.3684 17.4999 14.418 17.9567 14.6072C18.4135 14.7964 18.804 15.1168 19.0787 15.5279C19.2596 15.7987 19.385 16.1009 19.4495 16.4169H20.671C20.5953 15.8615 20.3943 15.3282 20.0805 14.8586C19.6734 14.2493 19.0948 13.7744 18.4178 13.494C17.7408 13.2136 16.9959 13.1403 16.2772 13.2832C15.5585 13.4262 14.8984 13.779 14.3803 14.2971C13.8621 14.8153 13.5093 15.4754 13.3663 16.1941C13.2234 16.9128 13.2967 17.6577 13.5772 18.3347C13.8576 19.0116 14.3324 19.5903 14.9417 19.9973C15.551 20.4044 16.2673 20.6217 17 20.6217V21.9169C16.0111 21.9169 15.0444 21.6236 14.2222 21.0742C13.3999 20.5248 12.759 19.7439 12.3806 18.8303C12.0022 17.9167 11.9031 16.9113 12.0961 15.9414C12.289 14.9715 12.7652 14.0806 13.4645 13.3813C14.1637 12.6821 15.0546 12.2059 16.0246 12.0129C16.9945 11.82 17.9998 11.919 18.9134 12.2975C19.827 12.6759 20.6079 13.3168 21.1573 14.139Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.61074 18.9556L11 19.9169C10.7219 19.2214 10.5521 18.4709 10.5115 17.6862L9.5 17.1332V5.21912L15.4032 6.9682L15.5 6.93377V10.5604C15.8254 10.4893 16.1594 10.4409 16.5 10.4169V6.57821L20 5.33377V10.9895C20.7496 11.3456 21.4259 11.831 22 12.4169V2.5L15.3468 4.86557L8.59684 2.86557L2 5.21111V20.7185L8.61074 18.9556ZM8.5 5.02266V16.9153L4 18.1153V6.62266L8.5 5.02266ZM21.1573 14.139C21.6137 14.822 21.8933 15.6046 21.9749 16.4169H22V16.9125L22 16.9169L22 17.4169H17V16.4169H18.3909C18.3504 16.3042 18.2961 16.1963 18.2289 16.0957C18.0665 15.8527 17.8357 15.6632 17.5656 15.5514C17.2955 15.4395 16.9984 15.4102 16.7117 15.4672C16.4249 15.5243 16.1616 15.665 15.9549 15.8718C15.7482 16.0785 15.6074 16.3418 15.5504 16.6285C15.4933 16.9152 15.5226 17.2124 15.6345 17.4825C15.7464 17.7526 15.9358 17.9834 16.1789 18.1458C16.4219 18.3082 16.7077 18.3949 17 18.3949V19.4169C16.5055 19.4169 16.0222 19.2702 15.6111 18.9955C15.2 18.7208 14.8795 18.3304 14.6903 17.8736C14.5011 17.4168 14.4516 16.9141 14.548 16.4291C14.6445 15.9442 14.8826 15.4987 15.2322 15.1491C15.5819 14.7995 16.0273 14.5614 16.5123 14.4649C16.9972 14.3684 17.4999 14.418 17.9567 14.6072C18.4135 14.7964 18.804 15.1168 19.0787 15.5279C19.2596 15.7987 19.385 16.1009 19.4495 16.4169H20.671C20.5953 15.8615 20.3943 15.3282 20.0805 14.8586C19.6734 14.2493 19.0948 13.7744 18.4178 13.494C17.7408 13.2136 16.9959 13.1403 16.2772 13.2832C15.5585 13.4262 14.8984 13.779 14.3803 14.2971C13.8621 14.8153 13.5093 15.4754 13.3663 16.1941C13.2234 16.9128 13.2967 17.6577 13.5772 18.3347C13.8576 19.0116 14.3324 19.5903 14.9417 19.9973C15.551 20.4044 16.2673 20.6217 17 20.6217V21.9169C16.0111 21.9169 15.0444 21.6236 14.2222 21.0742C13.3999 20.5248 12.759 19.7439 12.3806 18.8303C12.0022 17.9167 11.9031 16.9113 12.0961 15.9414C12.289 14.9715 12.7652 14.0806 13.4645 13.3813C14.1637 12.6821 15.0546 12.2059 16.0246 12.0129C16.9945 11.82 17.9998 11.919 18.9134 12.2975C19.827 12.6759 20.6079 13.3168 21.1573 14.139Z" style="fill: var(--element-active-color)"/>
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
    }
    .wrapper > * {
      height: 100%;
      width: 100%;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'obi-07-radar-overlay': Obi07RadarOverlay;
  }
}