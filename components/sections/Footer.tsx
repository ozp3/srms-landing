import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-elevated border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div className="flex flex-col gap-4">
            <div>
              <img src="/srms-logo.svg" alt="SRMS" className="h-[120px] w-auto mb-1" />
              <p className="text-text-muted text-sm">
                {siteConfig.projectFullName}
              </p>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-sm">
              Yapay zeka destekli altyapı raporlama ve yönetim sistemi.
              Fotoğraftan çözüme - tamamen otomatik.
            </p>
            <div className="flex flex-col gap-1 text-sm text-text-muted">
              <p><span className="text-text-primary font-medium">Takım:</span> {siteConfig.teamName}</p>
              <p><span className="text-text-primary font-medium">Danışman:</span> {siteConfig.supervisor}</p>
              <p><span className="text-text-primary font-medium">Üniversite:</span> {siteConfig.university}</p>
              <p><span className="text-text-primary font-medium">Ders:</span> {siteConfig.course}</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end justify-center gap-4">
            <a href="https://linktr.ee/srms" target="_blank" rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-border
              hover:border-accent/40 transition-colors duration-300">
              <img src="/qr-code.svg" alt="SRMS QR Code" className="w-36 h-36" />
              <p className="text-xs text-text-muted text-center font-medium uppercase tracking-wider">
                Scan to visit
              </p>
              <p className="text-xs text-accent font-medium">linktr.ee/srms</p>
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-text-muted">
          <p>© {new Date().getFullYear()} {siteConfig.teamName} - {siteConfig.university}</p>
          <p className="italic opacity-60">{siteConfig.projectShortName} · {siteConfig.course}</p>
        </div>
      </div>
    </footer>
  );
}
