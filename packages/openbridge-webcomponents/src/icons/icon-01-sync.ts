import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-01-sync')
export class Obi01Sync extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M4 20V18H6.75L6.35 17.65C5.48333 16.8833 4.875 16.0083 4.525 15.025C4.175 14.0417 4 13.05 4 12.05C4 10.2 4.55417 8.55417 5.6625 7.1125C6.77083 5.67083 8.21667 4.71667 10 4.25V6.35C8.8 6.78333 7.83333 7.52083 7.1 8.5625C6.36667 9.60417 6 10.7667 6 12.05C6 12.8 6.14167 13.5292 6.425 14.2375C6.70833 14.9458 7.15 15.6 7.75 16.2L8 16.45V14H10V20H4ZM14 19.75V17.65C15.2 17.2167 16.1667 16.4792 16.9 15.4375C17.6333 14.3958 18 13.2333 18 11.95C18 11.2 17.8583 10.4708 17.575 9.7625C17.2917 9.05417 16.85 8.4 16.25 7.8L16 7.55V10H14V4H20V6H17.25L17.65 6.35C18.4667 7.16667 19.0625 8.05417 19.4375 9.0125C19.8125 9.97083 20 10.95 20 11.95C20 13.8 19.4458 15.4458 18.3375 16.8875C17.2292 18.3292 15.7833 19.2833 14 19.75Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 20V18H6.75L6.35 17.65C5.48333 16.8833 4.875 16.0083 4.525 15.025C4.175 14.0417 4 13.05 4 12.05C4 10.2 4.55417 8.55417 5.6625 7.1125C6.77083 5.67083 8.21667 4.71667 10 4.25V6.35C8.8 6.78333 7.83333 7.52083 7.1 8.5625C6.36667 9.60417 6 10.7667 6 12.05C6 12.8 6.14167 13.5292 6.425 14.2375C6.70833 14.9458 7.15 15.6 7.75 16.2L8 16.45V14H10V20H4ZM14 19.75V17.65C15.2 17.2167 16.1667 16.4792 16.9 15.4375C17.6333 14.3958 18 13.2333 18 11.95C18 11.2 17.8583 10.4708 17.575 9.7625C17.2917 9.05417 16.85 8.4 16.25 7.8L16 7.55V10H14V4H20V6H17.25L17.65 6.35C18.4667 7.16667 19.0625 8.05417 19.4375 9.0125C19.8125 9.97083 20 10.95 20 11.95C20 13.8 19.4458 15.4458 18.3375 16.8875C17.2292 18.3292 15.7833 19.2833 14 19.75Z" style="fill: var(--element-active-color)"/>
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
    'obi-01-sync': Obi01Sync;
  }
}
