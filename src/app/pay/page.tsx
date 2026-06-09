import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";

export const metadata: Metadata = {
  title: "ご決済 | Stella 八ヶ岳",
  description: "お支払いは銀行振込・クレジットカード・Paypayの中からお選びいただけます。",
};

export default function PayPage() {
  return (
    <SiteLayout title="ご決済" breadcrumb="ご決済">
      <p>お支払いは銀行振込・クレジットカード・Paypayの中からお選びいただけます。<br />
        いずれかの方法でご決済の上、決済完了した旨をサポートまでご連絡ください。<br />
        ご決済日と金額・決済手段を添えていただけるとスムーズです。</p>

      <p>■銀行振込の場合<br />
        下記銀行口座宛にお振り込みをお願いいたします。<br />
        恐れ入りますが振込手数料はご負担願います。<br />
        お振込み名義がご予約名義と異なる場合はサポート宛にご連絡ください。</p>

      <p>
        <code>三井住友銀行（0009）トランクＮＯＲＴＨ支店（403）<br />
          普通　0434976<br />
          カ）ユナイテッドフューチャーズ</code>
        <br /><br />
        ■クレジットカード決済をご希望の場合<br />
        こちらのリンクより、金額とクレジットカード情報を入力してご決済ください。<br />
        ご決済名義がご予約名義と異なる場合はサポート宛にご連絡ください。<br /><br />
        <a href="https://buy.stripe.com/8wM9B5fME8NW4Uw5kt">＜クレジットカード決済＞</a>
      </p>

      <p>■Paypay決済をご希望の場合<br />
        下記QRコードを読み込み、金額を入力してご決済ください。<br />
        ご決済後、取引番号（もしくは決済日時と金額）をサポート宛にご連絡ください。（Paypayは事業者にご決済名義が表示されないのでお手数おかけしますがお願いいたします）</p>

      <figure className="wp-block-image size-large">
        <img
          fetchPriority="high"
          decoding="async"
          width={649}
          height={1024}
          src="/wp-content/uploads/2025/02/05-GnztgfnL4CR4EqLk-649x1024.png"
          alt="PayPayQRコード"
          className="wp-image-450"
        />
      </figure>
    </SiteLayout>
  );
}
