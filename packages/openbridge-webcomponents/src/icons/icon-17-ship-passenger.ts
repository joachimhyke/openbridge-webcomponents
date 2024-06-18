import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-17-ship-passenger')
export class Obi17ShipPassenger extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.4666 10.0001L16.9666 11H21.4624C21.8975 11 22.125 11.5174 21.8308 11.838L19.1584 15.6723C19.0202 15.6049 18.8844 15.5348 18.751 15.462C18.583 15.3707 18.4269 15.2583 18.2827 15.125C18.0904 14.975 17.8821 14.9 17.6577 14.9C17.4333 14.9 17.225 14.975 17.0327 15.125C16.7122 15.3917 16.3596 15.604 15.975 15.762C15.5904 15.9207 15.1898 16 14.7731 16C14.3564 16 13.9558 15.9207 13.5712 15.762C13.1866 15.604 12.834 15.3917 12.5135 15.125C12.3212 14.975 12.1128 14.9 11.8885 14.9C11.6641 14.9 11.4558 14.975 11.2635 15.125C10.943 15.3917 10.5904 15.604 10.2058 15.762C9.82117 15.9207 9.42052 16 9.00386 16C8.58719 16 8.18655 15.9207 7.80193 15.762C7.41732 15.604 7.06475 15.3917 6.74424 15.125C6.55193 14.975 6.3436 14.9 6.11924 14.9C5.89488 14.9 5.68655 14.975 5.49424 15.125C5.35001 15.2583 5.1936 15.3707 5.02501 15.462C4.85706 15.554 4.68495 15.6417 4.50867 15.725C4.13746 15.879 3.4639 15.9129 2.89102 15.844L1.93002 12L2.93002 10.0001L5.43002 10L5.93002 9.0001H6.96665L7.43003 8H12.93L13.4667 9L14.9666 9.0001L15.4666 10.0001L16.4666 10.0001ZM13.9667 11.0001H11.9667V12.0001H13.9667V11.0001ZM10.9667 11.0001H8.96665V12.0001H10.9667V11.0001ZM5.96665 11.0001H7.96665V12.0001H5.96665V11.0001Z" fill="currentColor"/>
<path d="M19.475 19.612C19.975 19.7373 20.4833 19.8 21 19.8C21.2833 19.8 21.5207 19.704 21.712 19.512C21.904 19.3207 22 19.0833 22 18.8C22 18.5167 21.904 18.2793 21.712 18.088C21.5207 17.896 21.2833 17.8 21 17.8C20.5667 17.8 20.1373 17.7457 19.712 17.637C19.2873 17.529 18.8833 17.3583 18.5 17.125C18.35 17.0417 18.1833 17 18 17C17.8167 17 17.65 17.0417 17.5 17.125C17.1167 17.3583 16.7123 17.529 16.287 17.637C15.8623 17.7457 15.4333 17.8 15 17.8C14.5667 17.8 14.1373 17.7457 13.712 17.637C13.2873 17.529 12.8833 17.3583 12.5 17.125C12.35 17.0417 12.179 17 11.987 17C11.7957 17 11.6333 17.0417 11.5 17.125C11.1167 17.3583 10.7123 17.529 10.287 17.637C9.86233 17.7457 9.43333 17.8 9 17.8C8.56667 17.8 8.13733 17.7457 7.712 17.637C7.28733 17.529 6.88333 17.3583 6.5 17.125C6.36667 17.0417 6.2 17 6 17C5.8 17 5.63333 17.0417 5.5 17.125C5.11667 17.3583 4.71267 17.529 4.288 17.637C3.86267 17.7457 3.43333 17.8 3 17.8C2.71667 17.8 2.47933 17.896 2.288 18.088C2.096 18.2793 2 18.5167 2 18.8C2 19.0833 2.096 19.3207 2.288 19.512C2.47933 19.704 2.71667 19.8 3 19.8C3.51667 19.8 4.025 19.7373 4.525 19.612C5.025 19.4873 5.51667 19.3 6 19.05C6.48333 19.3 6.975 19.4873 7.475 19.612C7.975 19.7373 8.48333 19.8 9 19.8C9.51667 19.8 10.025 19.7373 10.525 19.612C11.025 19.4873 11.5167 19.3 12 19.05C12.4833 19.3 12.975 19.4873 13.475 19.612C13.975 19.7373 14.4833 19.8 15 19.8C15.5167 19.8 16.025 19.7373 16.525 19.612C17.025 19.4873 17.5167 19.3 18 19.05C18.4833 19.3 18.975 19.4873 19.475 19.612Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.4666 10.0001L16.9666 11H21.4624C21.8975 11 22.125 11.5174 21.8308 11.838L19.1584 15.6723C19.0202 15.6049 18.8844 15.5348 18.751 15.462C18.583 15.3707 18.4269 15.2583 18.2827 15.125C18.0904 14.975 17.8821 14.9 17.6577 14.9C17.4333 14.9 17.225 14.975 17.0327 15.125C16.7122 15.3917 16.3596 15.604 15.975 15.762C15.5904 15.9207 15.1898 16 14.7731 16C14.3564 16 13.9558 15.9207 13.5712 15.762C13.1866 15.604 12.834 15.3917 12.5135 15.125C12.3212 14.975 12.1128 14.9 11.8885 14.9C11.6641 14.9 11.4558 14.975 11.2635 15.125C10.943 15.3917 10.5904 15.604 10.2058 15.762C9.82117 15.9207 9.42052 16 9.00386 16C8.58719 16 8.18655 15.9207 7.80193 15.762C7.41732 15.604 7.06475 15.3917 6.74424 15.125C6.55193 14.975 6.3436 14.9 6.11924 14.9C5.89488 14.9 5.68655 14.975 5.49424 15.125C5.35001 15.2583 5.1936 15.3707 5.02501 15.462C4.85706 15.554 4.68495 15.6417 4.50867 15.725C4.13746 15.879 3.4639 15.9129 2.89102 15.844L1.93002 12L2.93002 10.0001L5.43002 10L5.93002 9.0001H6.96665L7.43003 8H12.93L13.4667 9L14.9666 9.0001L15.4666 10.0001L16.4666 10.0001ZM13.9667 11.0001H11.9667V12.0001H13.9667V11.0001ZM10.9667 11.0001H8.96665V12.0001H10.9667V11.0001ZM5.96665 11.0001H7.96665V12.0001H5.96665V11.0001Z" style="fill: var(--element-active-color)"/>
<path d="M19.475 19.612C19.975 19.7373 20.4833 19.8 21 19.8C21.2833 19.8 21.5207 19.704 21.712 19.512C21.904 19.3207 22 19.0833 22 18.8C22 18.5167 21.904 18.2793 21.712 18.088C21.5207 17.896 21.2833 17.8 21 17.8C20.5667 17.8 20.1373 17.7457 19.712 17.637C19.2873 17.529 18.8833 17.3583 18.5 17.125C18.35 17.0417 18.1833 17 18 17C17.8167 17 17.65 17.0417 17.5 17.125C17.1167 17.3583 16.7123 17.529 16.287 17.637C15.8623 17.7457 15.4333 17.8 15 17.8C14.5667 17.8 14.1373 17.7457 13.712 17.637C13.2873 17.529 12.8833 17.3583 12.5 17.125C12.35 17.0417 12.179 17 11.987 17C11.7957 17 11.6333 17.0417 11.5 17.125C11.1167 17.3583 10.7123 17.529 10.287 17.637C9.86233 17.7457 9.43333 17.8 9 17.8C8.56667 17.8 8.13733 17.7457 7.712 17.637C7.28733 17.529 6.88333 17.3583 6.5 17.125C6.36667 17.0417 6.2 17 6 17C5.8 17 5.63333 17.0417 5.5 17.125C5.11667 17.3583 4.71267 17.529 4.288 17.637C3.86267 17.7457 3.43333 17.8 3 17.8C2.71667 17.8 2.47933 17.896 2.288 18.088C2.096 18.2793 2 18.5167 2 18.8C2 19.0833 2.096 19.3207 2.288 19.512C2.47933 19.704 2.71667 19.8 3 19.8C3.51667 19.8 4.025 19.7373 4.525 19.612C5.025 19.4873 5.51667 19.3 6 19.05C6.48333 19.3 6.975 19.4873 7.475 19.612C7.975 19.7373 8.48333 19.8 9 19.8C9.51667 19.8 10.025 19.7373 10.525 19.612C11.025 19.4873 11.5167 19.3 12 19.05C12.4833 19.3 12.975 19.4873 13.475 19.612C13.975 19.7373 14.4833 19.8 15 19.8C15.5167 19.8 16.025 19.7373 16.525 19.612C17.025 19.4873 17.5167 19.3 18 19.05C18.4833 19.3 18.975 19.4873 19.475 19.612Z" style="fill: var(--element-active-color)"/>
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
    'obi-17-ship-passenger': Obi17ShipPassenger;
  }
}
