import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-20-satellite-full')
export class Obi20SatelliteFull extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M15.4442 3.68508C16.5361 4.13737 17.5282 4.80031 18.364 5.63604C19.1997 6.47176 19.8626 7.46392 20.3149 8.55585C20.7672 9.64778 21 10.8181 21 12H23C23 10.5555 22.7155 9.12506 22.1627 7.79048C21.6099 6.4559 20.7996 5.24327 19.7782 4.22182C18.7567 3.20038 17.5441 2.39012 16.2095 1.83732C14.8749 1.28452 13.4445 1 12 1V3C13.1819 3 14.3522 3.23279 15.4442 3.68508Z" fill="currentColor"/>
<path d="M13.9137 7.38048C14.5203 7.63176 15.0715 8.00005 15.5358 8.46435C16.0001 8.92864 16.3684 9.47983 16.6197 10.0865C16.871 10.6931 17.0003 11.3433 17.0003 11.9999H19.0003C19.0003 11.0806 18.8192 10.1704 18.4675 9.32109C18.1157 8.47182 17.6001 7.70014 16.9501 7.05013C16.3 6.40012 15.5284 5.88451 14.6791 5.53272C13.8298 5.18094 12.9196 4.99988 12.0003 4.99988L12.0003 6.99988C12.6569 6.99988 13.3071 7.12921 13.9137 7.38048Z" fill="currentColor"/>
<path d="M16.9497 16.95C15.637 18.2627 13.8565 19.0002 12 19.0002C10.1435 19.0002 8.36301 18.2627 7.05025 16.95C5.7375 15.6372 5 13.8567 5 12.0002C5 10.1437 5.7375 8.36323 7.05025 7.05048L11.707 11.7073L12.0633 11.351C12.0224 11.2419 12 11.1237 12 11.0002C12 10.448 12.4477 10.0002 13 10.0002C13.5523 10.0002 14 10.448 14 11.0002C14 11.5525 13.5523 12.0002 13 12.0002C12.9458 12.0002 12.8927 11.9959 12.8409 11.9877L12.4141 12.4144L16.9497 16.95Z" fill="currentColor"/>
<path d="M2 23.0002L5.58481 18.3124L5.63604 18.3641C7.32387 20.0519 9.61305 21.0001 12 21.0001C12.689 21.0001 13.3699 20.9211 14.0305 20.7681L16 23.0002H2Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.4442 3.68508C16.5361 4.13737 17.5282 4.80031 18.364 5.63604C19.1997 6.47176 19.8626 7.46392 20.3149 8.55585C20.7672 9.64778 21 10.8181 21 12H23C23 10.5555 22.7155 9.12506 22.1627 7.79048C21.6099 6.4559 20.7996 5.24327 19.7782 4.22182C18.7567 3.20038 17.5441 2.39012 16.2095 1.83732C14.8749 1.28452 13.4445 1 12 1V3C13.1819 3 14.3522 3.23279 15.4442 3.68508Z" fill="currentColor"/>
<path d="M13.9137 7.38048C14.5203 7.63176 15.0715 8.00005 15.5358 8.46435C16.0001 8.92864 16.3684 9.47983 16.6197 10.0865C16.871 10.6931 17.0003 11.3433 17.0003 11.9999H19.0003C19.0003 11.0806 18.8192 10.1704 18.4675 9.32109C18.1157 8.47182 17.6001 7.70014 16.9501 7.05013C16.3 6.40012 15.5284 5.88451 14.6791 5.53272C13.8298 5.18094 12.9196 4.99988 12.0003 4.99988L12.0003 6.99988C12.6569 6.99988 13.3071 7.12921 13.9137 7.38048Z" fill="currentColor"/>
<path d="M16.9497 16.95C15.637 18.2627 13.8565 19.0002 12 19.0002C10.1435 19.0002 8.36301 18.2627 7.05025 16.95C5.7375 15.6372 5 13.8567 5 12.0002C5 10.1437 5.7375 8.36323 7.05025 7.05048L11.707 11.7073L12.0633 11.351C12.0224 11.2419 12 11.1237 12 11.0002C12 10.448 12.4477 10.0002 13 10.0002C13.5523 10.0002 14 10.448 14 11.0002C14 11.5525 13.5523 12.0002 13 12.0002C12.9458 12.0002 12.8927 11.9959 12.8409 11.9877L12.4141 12.4144L16.9497 16.95Z" fill="currentColor"/>
<path d="M2 23.0002L5.58481 18.3124L5.63604 18.3641C7.32387 20.0519 9.61305 21.0001 12 21.0001C12.689 21.0001 13.3699 20.9211 14.0305 20.7681L16 23.0002H2Z" fill="currentColor"/>
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
    'obi-20-satellite-full': Obi20SatelliteFull;
  }
}
