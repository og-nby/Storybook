import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{B as s}from"./Button-BOj5yDbO.js";const l="_card_1rfps_1",m={card:l};function e({className:o,...n}){const c=[m.card,o].filter(Boolean).join(" ");return r.jsx("div",{className:c,...n})}e.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const v={title:"Components/Card",component:e},t={render:()=>r.jsxs(e,{style:{width:360},children:[r.jsx("div",{style:{font:"var(--font-heading)",marginBottom:8},children:"カードタイトル"}),r.jsx("div",{style:{marginBottom:12},children:"DESIGN.md の Border / Radius / Padding トークンで見た目を統一します。"}),r.jsxs("div",{style:{display:"flex",gap:10},children:[r.jsx(s,{variant:"primary",children:"保存"}),r.jsx(s,{variant:"subtle",children:"キャンセル"})]})]})};var a,d,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: 360
  }}>\r
      <div style={{
      font: 'var(--font-heading)',
      marginBottom: 8
    }}>\r
        カードタイトル\r
      </div>\r
      <div style={{
      marginBottom: 12
    }}>\r
        DESIGN.md の Border / Radius / Padding トークンで見た目を統一します。\r
      </div>\r
      <div style={{
      display: 'flex',
      gap: 10
    }}>\r
        <Button variant="primary">保存</Button>\r
        <Button variant="subtle">キャンセル</Button>\r
      </div>\r
    </Card>
}`,...(i=(d=t.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const y=["Basic"];export{t as Basic,y as __namedExportsOrder,v as default};
