import{i as t}from"./isValidSignature-188f2e17.js";import{a2 as r}from"./index-0c28943e.js";import{h as e}from"./index-524bf2e3.js";import"./toRlp-dfecdc0f.js";const i="0x1626ba7e";async function h(a){if(!r(a.signature))throw new Error("The signature must be a valid hex string.");return await t({contract:a.contract,hash:e(a.data),signature:a.signature})===i}export{h as checkContractWalletSignedTypedData};