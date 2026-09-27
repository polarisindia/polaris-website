import type { Metadata } from "next";
import { company, offices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Polaris Renewable Solutions collects, uses and protects information submitted through polarisenergy.in.",
};

const lastUpdated = "11 September 2026";

const sections: { heading: string; body: React.ReactNode }[] = [
  {
    heading: "Who we are",
    body: (
      <>
        <p>
          This policy covers polarisenergy.in, operated by{" "}
          <strong className="font-semibold text-ink">
            Polaris Renewable Solutions Pvt. Ltd.
          </strong>{" "}
          ({company.address}), together with its Morocco affiliate{" "}
          <strong className="font-semibold text-ink">
            Polaris Global Energie SARL
          </strong>{" "}
          (referred to together as &ldquo;Polaris&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;). It explains what information we collect when you
          visit this site or contact us, and how we use it.
        </p>
      </>
    ),
  },
  {
    heading: "Information we collect",
    body: (
      <>
        <p>We collect information in two ways:</p>
        <ul className="mt-3 space-y-2.5">
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
            <span>
              <strong className="font-semibold text-ink">
                Information you give us directly.
              </strong>{" "}
              When you submit the enquiry form on our{" "}
              <a
                href="/contact"
                className="text-brand-strong underline underline-offset-2 hover:text-ink"
              >
                Contact
              </a>{" "}
              page, we collect your name, email address, organization, the topic
              of your enquiry and your message. If you email us, including a CV
              or application sent to our careers address, we receive whatever
              you choose to include in that email and its attachments.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
            <span>
              <strong className="font-semibold text-ink">
                Technical information collected automatically.
              </strong>{" "}
              Like most websites, our hosting infrastructure logs standard
              technical data for every visit, IP address, browser and device
              type, pages viewed and referring URL, for security and reliability
              purposes. We do not use this data to build advertising profiles.
            </span>
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "How we use it",
    body: (
      <>
        <p>We use the information we collect to:</p>
        <ul className="mt-3 space-y-2.5">
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
            <span>
              respond to enquiries submitted through the contact form or by
              email, and follow up on a project, partnership or supply
              discussion;
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
            <span>evaluate applications sent to our careers address;</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
            <span>operate, secure and improve this website.</span>
          </li>
        </ul>
        <p className="mt-4">
          We do not sell, rent or use your information for third-party
          advertising.
        </p>
      </>
    ),
  },
  {
    heading: "How we share it",
    body: (
      <p>
        Information you submit is accessible only to Polaris personnel who need
        it to respond to you, and to the service providers that host our website
        and email. We do not sell or rent your information to third parties, and
        we only disclose it beyond this if required by law or to protect our
        legal rights.
      </p>
    ),
  },
  {
    heading: "Retention",
    body: (
      <p>
        We keep enquiry and application information for as long as reasonably
        needed to respond to you and pursue any resulting discussion, and delete
        or anonymize it once it is no longer needed for that purpose or for a
        legitimate business or legal reason.
      </p>
    ),
  },
  {
    heading: "International transfer",
    body: (
      <p>
        Polaris operates in both India and Morocco. Depending on which office or
        team is best placed to handle your enquiry, information you submit may
        be accessed or processed in either country by Polaris personnel, under
        the same protections described in this policy.
      </p>
    ),
  },
  {
    heading: "Your rights",
    body: (
      <p>
        Depending on where you are located, you may have the right to access,
        correct, delete or object to our processing of your information,
        including under India&rsquo;s Digital Personal Data Protection Act, 2023
        and Morocco&rsquo;s Law No. 09-08 on the protection of individuals with
        regard to the processing of personal data. To exercise any of these
        rights, contact us using the details below.
      </p>
    ),
  },
  {
    heading: "Security",
    body: (
      <p>
        We take reasonable technical and organizational measures to protect the
        information you share with us. No method of transmission or storage is
        completely secure, so we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    heading: "Children's privacy",
    body: (
      <p>
        This website is intended for business audiences and is not directed at
        children. We do not knowingly collect information from anyone under 18.
      </p>
    ),
  },
  {
    heading: "Changes to this policy",
    body: (
      <p>
        We may update this policy from time to time to reflect changes in our
        practices or for legal or operational reasons. The date at the top of
        this page shows when it was last revised.
      </p>
    ),
  },
  {
    heading: "Contact us",
    body: (
      <p>
        Questions about this policy, or requests relating to your information,
        can be sent to{" "}
        <a
          href={`mailto:${company.email}`}
          className="text-brand-strong underline underline-offset-2 hover:text-ink"
        >
          {company.email}
        </a>{" "}
        or to {offices[0].name.replace("Headquarters, ", "")} at{" "}
        {offices[0].address}.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-[#FAFBF6]">
      <div className="container-px mx-auto max-w-3xl pb-20 pt-[calc(83px+2.5rem)] lg:pb-28 lg:pt-[calc(83px+4rem)]">
        <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-[#26502e] sm:text-[58px]">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-ink-faint">
          Last updated {lastUpdated}
        </p>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
          This policy explains what information Polaris collects through
          polarisenergy.in, why we collect it, and how it is handled.
        </p>

        <div className="mt-14 space-y-10 border-t border-ink/10 pt-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                {s.heading}
              </h2>
              <div className="mt-3 space-y-4 text-[17px] leading-relaxed text-ink-soft">
                {s.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
