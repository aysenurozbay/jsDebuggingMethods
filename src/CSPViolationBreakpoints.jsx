import React, { useEffect, useState } from "react";

const TrustedTypesExample = () => {
  const [policy, setPolicy] = useState(null);

  useEffect(() => {
    if (window.trustedTypes) {
      // Eğer Trusted Types mevcutsa, varsayılan politikayı oluştur
      let policy;
      try {
        policy = trustedTypes.getPolicy("default");
        if (!policy) {
          // Varsayılan politika yoksa, yeni bir politika oluştur
          policy = trustedTypes.createPolicy("default", {
            createHTML: (input) => input,
            createScript: (input) => input,
            createScriptURL: (input) => input,
          });
        }
        setPolicy(policy);
      } catch (error) {
        console.error("Trusted Types API hatası:", error);
      }
    } else {
      console.error("Trusted Types API mevcut değil.");
    }
  }, []);

  const unsafeContent = '<script>alert("Bu bir güvenlik açığıdır!");</script>';

  const addContent = () => {
    if (policy) {
      const trustedHtml = policy.createHTML(unsafeContent);
      document.getElementById("content").innerHTML = trustedHtml;
    }
  };

  return (
    <div>
      <h4>Trusted Types Örneği</h4>
      <button onClick={addContent}>İçeriği Ekle</button>
      <div id="content">Güvenli içerik buraya eklenecek.</div>
    </div>
  );
};

const PolicyViolationExample = () => {
  useEffect(() => {
    if (window.trustedTypes) {
      try {
        // Trusted Types politikasını oluşturun veya alın
        const policy = trustedTypes.createPolicy("default", {
          createHTML: (input) => {
            // İçeriği sadece politikaya uygun şekilde oluştur
            return input;
          },
          createScript: (input) => input,
          createScriptURL: (input) => input,
        });

        // Güvenli içerik oluşturma
        const safeContent = "<p>Bu güvenli bir içeriktir.</p>";
        document.getElementById("content").innerHTML =
          policy.createHTML(safeContent);

        // Politikayı ihlal eden içerik
        const unsafeContent =
          '<script>alert("Bu bir güvenlik açığıdır!");</script>';
        // Bu içeriği eklemeye çalışırsak, Trusted Types tarafından engellenmelidir
        // Ancak, bu işlem hata verebilir veya Trusted Types tarafından engellenmeyebilir

        // Güvenli olmayan içeriği eklemeyi deneyin
        document.getElementById("content").innerHTML = unsafeContent;
      } catch (error) {
        console.error("Trusted Types API hatası:", error);
      }
    } else {
      console.error("Trusted Types API mevcut değil.");
    }
  }, []);

  return (
    <div>
      <h4>Trusted Types Policy İhlali Örneği</h4>
      <div id="content">İçerik buraya eklenecek.</div>
    </div>
  );
};

const CSPViolationBreakpoints = () => {
  return (
    <div>
      <TrustedTypesExample />
      <PolicyViolationExample />
    </div>
  );
};

export default CSPViolationBreakpoints;
