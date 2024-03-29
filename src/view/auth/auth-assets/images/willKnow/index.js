import * as Bitcoin from './bitcoin';
import * as Nft from './nft';
import * as Safety from './safety';
import * as Operation from './operation';
import * as Mining from './mining';
import * as Wallet from './wallets';

const ArchIco = (props) => (
  <svg {...props} viewBox="0 0 47 95" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M47 22.5L37 28V95L47 89V22.5Z" fill="#2B4E93" />
    <path d="M20 25L10 29.0966V79L20 74.531V25Z" fill="url(#paint0_linear_75_1675)" />
    <path d="M27 22.5737L37 28.5001V95L27 89V22.5737Z" fill="#120D52" />
    <path d="M0 6.5L10 12V79L0 73V6.5Z" fill="#120D52" />
    <path d="M47 22.5L10 0L0 6.5L37 28.5L47 22.5Z" fill="#2B4E93" />
    <path d="M27 22.5508L10 12.4492V31.4997L27 40.9997V22.5508Z" fill="#120D52" />
    <defs>
      <linearGradient
        id="paint0_linear_75_1675"
        x1="22.5"
        y1="47.5"
        x2="-7"
        y2="48.5"
        gradientUnits="userSpaceOnUse">
        <stop />
        <stop offset="1" stop-color="#2377F4" />
      </linearGradient>
    </defs>
  </svg>
);

export { ArchIco, Bitcoin, Wallet, Nft, Safety, Operation, Mining };
