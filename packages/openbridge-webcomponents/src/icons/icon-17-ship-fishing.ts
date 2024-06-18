import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-17-ship-fishing')
export class Obi17ShipFishing extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M8.9998 8.53024L14.043 5L19.3389 9.88855C19.3791 9.92564 19.4118 9.96778 19.437 10.0131C19.0858 10.0564 18.6965 10.1012 18.2701 10.1461L18.1565 10.158L14.4998 6.78256V10.4534C14.1766 10.4727 13.8432 10.4911 13.4998 10.5082V6.6009L9.28653 9.55019C9.19913 9.61137 9.09896 9.6407 8.9998 9.64061V8.53024Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 11.6406V8.64062H4.5C4.22386 8.64062 4 8.86448 4 9.14062V11.6406H2V14.8557C2.54731 14.9082 3.16088 14.8694 3.50881 14.725C3.6851 14.6417 3.85721 14.554 4.02516 14.462C4.19375 14.3707 4.35016 14.2583 4.49439 14.125C4.6867 13.975 4.89503 13.9 5.11939 13.9C5.34375 13.9 5.55208 13.975 5.74439 14.125C6.0649 14.3917 6.41747 14.604 6.80208 14.762C7.1867 14.9207 7.58734 15 8.004 15C8.42067 15 8.82131 14.9207 9.20593 14.762C9.59054 14.604 9.94311 14.3917 10.2636 14.125C10.4559 13.975 10.6643 13.9 10.8886 13.9C11.113 13.9 11.3213 13.975 11.5136 14.125C11.8341 14.3917 12.1867 14.604 12.5713 14.762C12.9559 14.9207 13.3566 15 13.7732 15C14.1899 15 14.5905 14.9207 14.9752 14.762C15.3598 14.604 15.7123 14.3917 16.0328 14.125C16.2252 13.975 16.4335 13.9 16.6579 13.9C16.8822 13.9 17.0905 13.975 17.2829 14.125C17.4271 14.2583 17.5832 14.3707 17.7511 14.462C17.9197 14.554 18.0921 14.6417 18.2684 14.725C18.5147 14.7964 18.8076 14.8648 19.1033 14.9134C19.3553 13.9322 20.0277 12.8042 20.6613 12.3328C21.3538 11.8175 22 11.3368 22 10.6406C22 10.6406 17 11.6406 8 11.6406ZM5 9.64062H7V10.6406H5V9.64062Z" fill="currentColor"/>
<path d="M18.475 18.612C18.975 18.7373 19.4833 18.8 20 18.8C20.2833 18.8 20.5207 18.704 20.712 18.512C20.904 18.3207 21 18.0833 21 17.8C21 17.5167 20.904 17.2793 20.712 17.088C20.5207 16.896 20.2833 16.8 20 16.8C19.5667 16.8 19.1373 16.7457 18.712 16.637C18.2873 16.529 17.8833 16.3583 17.5 16.125C17.35 16.0417 17.1833 16 17 16C16.8167 16 16.65 16.0417 16.5 16.125C16.1167 16.3583 15.7123 16.529 15.287 16.637C14.8623 16.7457 14.4333 16.8 14 16.8C13.5667 16.8 13.1373 16.7457 12.712 16.637C12.2873 16.529 11.8833 16.3583 11.5 16.125C11.35 16.0417 11.179 16 10.987 16C10.7957 16 10.6333 16.0417 10.5 16.125C10.1167 16.3583 9.71233 16.529 9.287 16.637C8.86233 16.7457 8.43333 16.8 8 16.8C7.56667 16.8 7.13733 16.7457 6.712 16.637C6.28733 16.529 5.88333 16.3583 5.5 16.125C5.36667 16.0417 5.2 16 5 16C4.8 16 4.63333 16.0417 4.5 16.125C4.11667 16.3583 3.71267 16.529 3.288 16.637C2.86267 16.7457 2.43333 16.8 2 16.8C1.71667 16.8 1.47933 16.896 1.288 17.088C1.096 17.2793 1 17.5167 1 17.8C1 18.0833 1.096 18.3207 1.288 18.512C1.47933 18.704 1.71667 18.8 2 18.8C2.51667 18.8 3.025 18.7373 3.525 18.612C4.025 18.4873 4.51667 18.3 5 18.05C5.48333 18.3 5.975 18.4873 6.475 18.612C6.975 18.7373 7.48333 18.8 8 18.8C8.51667 18.8 9.025 18.7373 9.525 18.612C10.025 18.4873 10.5167 18.3 11 18.05C11.4833 18.3 11.975 18.4873 12.475 18.612C12.975 18.7373 13.4833 18.8 14 18.8C14.5167 18.8 15.025 18.7373 15.525 18.612C16.025 18.4873 16.5167 18.3 17 18.05C17.4833 18.3 17.975 18.4873 18.475 18.612Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.9998 8.53024L14.043 5L19.3389 9.88855C19.3791 9.92564 19.4118 9.96778 19.437 10.0131C19.0858 10.0564 18.6965 10.1012 18.2701 10.1461L18.1565 10.158L14.4998 6.78256V10.4534C14.1766 10.4727 13.8432 10.4911 13.4998 10.5082V6.6009L9.28653 9.55019C9.19913 9.61137 9.09896 9.6407 8.9998 9.64061V8.53024Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 11.6406V8.64062H4.5C4.22386 8.64062 4 8.86448 4 9.14062V11.6406H2V14.8557C2.54731 14.9082 3.16088 14.8694 3.50881 14.725C3.6851 14.6417 3.85721 14.554 4.02516 14.462C4.19375 14.3707 4.35016 14.2583 4.49439 14.125C4.6867 13.975 4.89503 13.9 5.11939 13.9C5.34375 13.9 5.55208 13.975 5.74439 14.125C6.0649 14.3917 6.41747 14.604 6.80208 14.762C7.1867 14.9207 7.58734 15 8.004 15C8.42067 15 8.82131 14.9207 9.20593 14.762C9.59054 14.604 9.94311 14.3917 10.2636 14.125C10.4559 13.975 10.6643 13.9 10.8886 13.9C11.113 13.9 11.3213 13.975 11.5136 14.125C11.8341 14.3917 12.1867 14.604 12.5713 14.762C12.9559 14.9207 13.3566 15 13.7732 15C14.1899 15 14.5905 14.9207 14.9752 14.762C15.3598 14.604 15.7123 14.3917 16.0328 14.125C16.2252 13.975 16.4335 13.9 16.6579 13.9C16.8822 13.9 17.0905 13.975 17.2829 14.125C17.4271 14.2583 17.5832 14.3707 17.7511 14.462C17.9197 14.554 18.0921 14.6417 18.2684 14.725C18.5147 14.7964 18.8076 14.8648 19.1033 14.9134C19.3553 13.9322 20.0277 12.8042 20.6613 12.3328C21.3538 11.8175 22 11.3368 22 10.6406C22 10.6406 17 11.6406 8 11.6406ZM5 9.64062H7V10.6406H5V9.64062Z" style="fill: var(--element-active-color)"/>
<path d="M18.475 18.612C18.975 18.7373 19.4833 18.8 20 18.8C20.2833 18.8 20.5207 18.704 20.712 18.512C20.904 18.3207 21 18.0833 21 17.8C21 17.5167 20.904 17.2793 20.712 17.088C20.5207 16.896 20.2833 16.8 20 16.8C19.5667 16.8 19.1373 16.7457 18.712 16.637C18.2873 16.529 17.8833 16.3583 17.5 16.125C17.35 16.0417 17.1833 16 17 16C16.8167 16 16.65 16.0417 16.5 16.125C16.1167 16.3583 15.7123 16.529 15.287 16.637C14.8623 16.7457 14.4333 16.8 14 16.8C13.5667 16.8 13.1373 16.7457 12.712 16.637C12.2873 16.529 11.8833 16.3583 11.5 16.125C11.35 16.0417 11.179 16 10.987 16C10.7957 16 10.6333 16.0417 10.5 16.125C10.1167 16.3583 9.71233 16.529 9.287 16.637C8.86233 16.7457 8.43333 16.8 8 16.8C7.56667 16.8 7.13733 16.7457 6.712 16.637C6.28733 16.529 5.88333 16.3583 5.5 16.125C5.36667 16.0417 5.2 16 5 16C4.8 16 4.63333 16.0417 4.5 16.125C4.11667 16.3583 3.71267 16.529 3.288 16.637C2.86267 16.7457 2.43333 16.8 2 16.8C1.71667 16.8 1.47933 16.896 1.288 17.088C1.096 17.2793 1 17.5167 1 17.8C1 18.0833 1.096 18.3207 1.288 18.512C1.47933 18.704 1.71667 18.8 2 18.8C2.51667 18.8 3.025 18.7373 3.525 18.612C4.025 18.4873 4.51667 18.3 5 18.05C5.48333 18.3 5.975 18.4873 6.475 18.612C6.975 18.7373 7.48333 18.8 8 18.8C8.51667 18.8 9.025 18.7373 9.525 18.612C10.025 18.4873 10.5167 18.3 11 18.05C11.4833 18.3 11.975 18.4873 12.475 18.612C12.975 18.7373 13.4833 18.8 14 18.8C14.5167 18.8 15.025 18.7373 15.525 18.612C16.025 18.4873 16.5167 18.3 17 18.05C17.4833 18.3 17.975 18.4873 18.475 18.612Z" style="fill: var(--element-active-color)"/>
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
    'obi-17-ship-fishing': Obi17ShipFishing;
  }
}
