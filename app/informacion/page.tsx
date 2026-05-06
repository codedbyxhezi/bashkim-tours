"use client";

import { useState } from "react";
import styles from "./Informacion.module.css";
import { useLanguage } from "@/components/LanguageProvider/LanguageProvider";

export default function InformacionPage() {
  const { locale } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  const content =
    locale === "sq"
      ? {
          badge: "Informacion",
          title: "Informacione të rëndësishme për udhëtimin",
          text: "Lexoni rregullat dhe informacionet kryesore para udhëtimit tuaj.",
          items: [
            {
              title: "Rregullat shëndetësore dhe sigurimi",
              text: "Udhëtari është i detyruar për të marrë informacion nga institucioni përkatës shëndetësor dhe për të respektuar rregullat shëndetësore për të udhëtuar në një vend të caktuar (nevojën për vaksinim ose një dokument shëndetësor) .Në rastin e një sëmundjeje ose një aksidenti gjatë shfrytëzimit të shërbimit tonë , shpenzimet mjekësore ose ndërhyrjet eventuale mjekësore paguhen nga udhëtari. Për shkak të kësaj ne rekomandojmë pasagjerët, për të bërë një polisë për sigurimin e udhëtarëve në ndonjë kompani sigurimesh, që mund të paguhet edhe në agjencinë tonë.",
            },
            {
              title: "Rregullat për valixhet",
              text: "Maksimum 2(dy) valixhe udhëtimi (çanta dhe paketa 70x80x20 cm me një shumë të përgjithshme prej 30 kg) për pasagjer janë të pranueshme. Për fëmijët dhe foshnjat është e lejuar për të poseduar 1 valixhet me një shumë të përgjithshme prej 15 kg. Transporti i objekteve të tilla si biçikleta, pajisje sportive, ski dhe instrumente muzikore është i ndaluara rreptësisht. Është e ndaluar për të transportuar lëndë narkotike, eksplozivë dhe objekte të tjera të rrezikshme. Mbulesa për shpenzimet emergjente, bagazhit dhe shpenzimet mjekësore është e vlefshme vetëm gjatë kohës që udhëton I siguruar nga Bashkim Tours. Për kushtet përfundimtare dhe shumat e sigurimit, konsulltohuni më detajisht me përfaqësues të agjencisë.",
            },
            {
              title: "Alkooli dhe duhani",
              text: "Kur udhëtoni nga një vend në një tjetër të BE-së, ju mund të merrni duhan dhe produkte alkoholike me ju për përdorim personal, por jo për rishitje. Sipas ligjit të BE-së, nuk keni të aprovuar mallrat për përdorimin tuaj personal në qoftë se posedoni me vete: 800 cigare 1 kg duhan 90 litra verë (duke përfshirë një maksimum prej 60 litra verëra me gaz) 110 litra birrë. Vendet e BE-së mund të kufizojnë numrin e cigareve që ju mund të sjellni me vete nga disa vende të tjera të BE-së. Ky kufizim nuk mund të jetë më i ulët se 300 cigare. Këto rregulla nuk zbatohen për udhëtarët nën moshën 17 vjeç, të cilët nuk lejohen të mbajnë alkool apo duhan aspak.",
            },
            {
              title: "Para (Cash) ",
              text: "Nëse ju doni të udhëtoni në vendet e BE-së me 10 000 euro ose më shumë në para të gatshme ose ekuivalent në ndonjë valutë tjetër, ju duhet të kontrolloni me autoritetet doganore në vendet që po udhëtoni dhe ti deklaroni ato. Nëse keni ndërmend të hyni ose të largoheni nga BE-ja me 10 000 euro ose më shumë në para të gatshme (ose kundërvlerën në monedha të tjera) duhet të deklaroni atë tek autoritetet doganore.",
            },
            {
              title: "Pasaporta / Visa",
              text: "Nëse ju jeni nënshtetas ose jo I BE-së dhe dëshironi të vizitojnë apo të udhëtojnë brenda BE-së, ju do të duhet të pajiseni me pasaportë: të vlefshme për të paktën 3 muaj pas datës që keni ndërmend të largoheni nga vendi i BE-së të jetë e lëshuar brenda 10 viteve të kaluara(biometrike) Zyrtarët e kufirit në vendet e BE-së mund të kërkojnë dokumente të tjera mbështetëse, të tilla si një letër ftesë, prova për banim, kthim ose biletë vajtje-ardhje. Ka një numër të vendeve shtetasit e të cilëve nuk kanë nevojë për vizë për të vizituar BE-në për tre muaj ose më pak. Maqedonia i përket këtij grupi.",
            },
            {
              title: "Aksidente - Kompensimi dhe ndihma",
              text: "Nëse jeni të lënduar në një aksident me autobus, gjatë një udhëtimi në distancë të gjatë (më shumë se 250 km), ju keni të drejtë për kompensim të mbuluara nga polisa e sigurimeve. Në rast të vdekjes, kompensimi mund të kërkohet nga vartësit tuaj. Kur është e nevojshme, transportuesi do të sigurojë ndihmë të menjëhershme: Ndihmë e shpejtë, ushqim, rroba, transport dhe akomodim.",
            },
            {
              title: "Siguria në autobus",
              text: "Udhëtimi me autobus është një nga mënyrat më të sigurta të transportit. Ne marrim sigurinë e klientëve tanë shumë seriozisht. Flota jonë e autobusëve është në gjendje mjaft të mirë dhe sigurojmë që vetëm shoferët më të kualifikuar lejohen pas timonit",
            },
            {
              title: "Ndryshimet e orareve",
              text: "Nisja dhe mbërritja çdo herë duhet të lexohet në kohën lokale. Bashkim Tours nuk pranon asnjë përgjegjësi për vonesa të udhëtimit dhe (ose) humbjet e shkaktuara nga pasagjerët. Bashkim Tours dhe ( ose) përfaqësuesit e saj të huaj kanë të drejtë në çdo kohë për të ndryshuar orarin. Pasagjerët duhet të kontrollojnë 48 orë përpara nisjes për çfarëdolloj ndryshimi të mundshëm në orarin e nisjes. Bashkim Tours nuk mban përgjegjësi nëse udhëtari ka refuzuar të japë informacion kontakti gjatë prenotimit apo në qoftë se informacioni i kontaktit është i pasaktë.",
            },
          ],
        }
      : {
          badge: "Informationen",
          title: "Wichtige Informationen für Ihre Reise",
          text: "Lesen Sie die wichtigsten Hinweise und Regeln vor Ihrer Fahrt.",
          items: [
            {
              title: "Gesundheitsregeln und Versicherung",
              text: "Der Reisende ist verpflichtet, sich bei der zuständigen Gesundheitsinstitution zu informieren und die gesundheitlichen Vorschriften für die Reise in ein bestimmtes Land einzuhalten (Notwendigkeit einer Impfung oder eines Gesundheitsdokuments). Im Falle einer Krankheit oder eines Unfalls während der Nutzung unserer Dienstleistungen werden die medizinischen Kosten oder eventuelle medizinische Eingriffe vom Reisenden selbst getragen. Aus diesem Grund empfehlen wir den Passagieren, eine Reiseversicherung bei einer Versicherungsgesellschaft abzuschließen, die auch in unserer Agentur bezahlt werden kann.",
            },
            {
              title: "Gepäckregeln",
              text: "Pro Passagier sind maximal 2 (zwei) Gepäckstücke (Koffer, Taschen oder Pakete mit den Maßen 70x80x20 cm und einem Gesamtgewicht von 30 kg) erlaubt. Für Kinder und Babys ist 1 Gepäckstück mit einem Gesamtgewicht von 15 kg zulässig. Der Transport von Gegenständen wie Fahrrädern, Sportgeräten, Skiern und Musikinstrumenten ist strengstens verboten. Ebenso ist der Transport von Betäubungsmitteln, Explosivstoffen und anderen gefährlichen Gegenständen untersagt. Die Deckung für Notfallkosten, Gepäck und medizinische Ausgaben gilt nur während der Reisezeit des bei Bashkim Tours versicherten Reisenden. Für die endgültigen Bedingungen und Versicherungssummen wenden Sie sich bitte ausführlicher an einen Vertreter der Agentur.",
            },
            {
              title: "Alkohol und Rauchen",
              text: "Wenn Sie von einem EU-Land in ein anderes reisen, dürfen Sie Tabak- und Alkoholprodukte für den persönlichen Gebrauch mitführen, jedoch nicht zum Weiterverkauf. Nach EU-Recht gelten Waren als für den persönlichen Gebrauch bestimmt, wenn Sie Folgendes mit sich führen: 800 Zigaretten, 1 kg Tabak, 90 Liter Wein (einschließlich maximal 60 Liter Schaumwein) <br /> 110 Liter Bier. EU-Länder können die Anzahl der Zigaretten begrenzen, die Sie aus bestimmten anderen EU-Ländern mitbringen dürfen. Diese Begrenzung darf jedoch nicht unter 300 Zigaretten liegen.Diese Regeln gelten nicht für Reisende unter 17 Jahren, da ihnen das Mitführen von Alkohol oder Tabak grundsätzlich nicht erlaubt ist.",
            },
            {
              title: "Bargeld",
              text: "Wenn Sie in EU-Länder mit 10.000 Euro oder mehr in bar oder dem Gegenwert in einer anderen Währung reisen möchten, müssen Sie sich bei den Zollbehörden der Länder informieren, in die Sie reisen, und den Betrag deklarieren. Wenn Sie beabsichtigen, mit 10.000 Euro oder mehr in bar (oder dem Gegenwert in anderen Währungen) in die EU einzureisen oder die EU zu verlassen, müssen Sie diesen Betrag bei den Zollbehörden anmelden.",
            },
            {
              title: "Reisepass / Visum",
              text: "Wenn Sie Staatsbürger eines EU-Landes oder eines Nicht-EU-Landes sind und die EU besuchen oder innerhalb der EU reisen möchten, müssen Sie über einen Reisepass verfügen: der noch mindestens 3 Monate über das Datum hinaus gültig ist, an dem Sie beabsichtigen, das EU-Land zu verlassen, der innerhalb der letzten 10 Jahre ausgestellt wurde (biometrischer Reisepass). Grenzbeamte in den EU-Ländern können weitere unterstützende Dokumente verlangen, wie zum Beispiel ein Einladungsschreiben, einen Nachweis über die Unterkunft, ein Rückreise- oder Hin- und Rückflugticket. Es gibt eine Reihe von Ländern, deren Staatsangehörige kein Visum benötigen, um die EU für drei Monate oder weniger zu besuchen. Mazedonien gehört zu dieser Gruppe.",
            },
            {
              title: "Unfälle und Hilfe",
              text: "Wenn Sie bei einem Busunfall während einer Fernreise (mehr als 250 km) verletzt werden, haben Sie Anspruch auf eine Entschädigung, die durch die Versicherungspolice gedeckt ist. Im Todesfall kann die Entschädigung von Ihren Angehörigen beansprucht werden. Falls erforderlich, wird der Beförderer unverzüglich Hilfe leisten, darunter: Erste Hilfe, Verpflegung, Kleidung, Transport und Unterkunft.",
            },
            {
              title: "Sicherheit im Bus",
              text: "Die Busreise ist eine der sichersten Arten des Transports. Wir nehmen die Sicherheit unserer Kunden sehr ernst. Unsere Busflotte befindet sich in einem sehr guten Zustand, und wir stellen sicher, dass nur die qualifiziertesten Fahrer das Steuer übernehmen dürfen.",
            },
            {
              title: "Fahrplanänderungen",
              text: "Abfahrts- und Ankunftszeiten müssen stets nach der jeweiligen Ortszeit gelesen werden. Bashkim Tours übernimmt keine Verantwortung für Reiseverspätungen und/oder Verluste, die den Passagieren entstehen. Bashkim Tours und/oder ihre ausländischen Vertreter haben jederzeit das Recht, den Fahrplan zu ändern. Die Passagiere müssen sich 48 Stunden vor der Abfahrt über mögliche Änderungen des Abfahrtsplans informieren. Bashkim Tours übernimmt keine Haftung, wenn der Reisende bei der Buchung keine Kontaktdaten angegeben hat oder wenn die angegebenen Kontaktdaten falsch sind.",
            },
          ],
        };

  return (
    <main className={styles.page}>
      <section className={styles.container}>
        <div className={styles.hero}>
          <span>{content.badge}</span>
          <h1>{content.title}</h1>
          <p>{content.text}</p>
        </div>

        <div className={styles.accordion}>
          {content.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.title}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
              >
                <button
                  type="button"
                  className={styles.question}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{item.title}</span>
                  <span className={styles.icon}>{isOpen ? "−" : "+"}</span>
                </button>

                {isOpen && <p className={styles.answer}>{item.text}</p>}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}