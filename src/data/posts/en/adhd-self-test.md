---
title: "ADHD Self-Test (ASRS v1.1)"
description: "Adult ADHD Self-Report Scale (ASRS v1.1) screener, symptom checklist, and printable results guide."
pubDate: 2026-09-08
updatedDate: 2026-09-12
author: en/torrance-merkle
topic: en/adhd
tags: ["adhd", "health", "screener", "test", "new-zealand"]
cover: ../../../assets/covers/adhd-wooden-blocks.webp
coverAlt: "Wooden blocks spelling ADHD arranged on a wooden table"
featured: true
draft: false
---

The **Adult ADHD Self-Report Scale (ASRS v1.1)** is a recognized symptom checklist developed in conjunction with the World Health Organization (WHO) and researchers at Harvard Medical School and New York University.

It is designed to help adults assess whether their everyday challenges with organization, focus, task initiation, and restlessness are consistent with adult ADHD.

## Complete the Questionnaire

Rate yourself on each question based on how you have felt and conducted yourself over the **past 6 months**.

<div id="asrs-questionnaire-container" class="not-prose my-8 w-full max-w-3xl mx-auto text-foreground">
  <form id="asrs-form"></form>

  <div id="asrs-submit-container" class="text-center mt-8">
    <button type="button" onclick="calculateASRS()" class="bg-primary text-primary-foreground font-display font-semibold px-8 py-3.5 rounded-pill shadow-float hover:opacity-95 transition-opacity cursor-pointer text-base">Calculate Results</button>
  </div>

  <div id="asrs-results-section" style="display: none;" class="mt-10">
    <div id="asrs-capture-area" class="p-6 sm:p-9 bg-card border border-border rounded-card shadow-float">
      <h3 class="font-display text-2xl font-bold text-foreground m-0">ASRS v1.1 Results Summary</h3>
      <p class="text-muted-foreground text-sm mt-1 mb-6">Assessment Date: <span id="asrs-result-date"></span></p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div class="p-6 bg-surface border border-border rounded-xl text-center">
          <h4 class="m-0 text-sm font-semibold text-muted-foreground uppercase tracking-wider">Part A (Screener)</h4>
          <div class="text-4xl font-bold font-display text-foreground my-2" id="asrs-score-a">0 / 6</div>
          <p class="m-0 text-xs text-muted-foreground">Most predictive of adult ADHD</p>
        </div>
        <div class="p-6 bg-surface border border-border rounded-xl text-center">
          <h4 class="m-0 text-sm font-semibold text-muted-foreground uppercase tracking-wider">Part B (Symptom Check)</h4>
          <div class="text-4xl font-bold font-display text-foreground my-2" id="asrs-score-b">0 / 12</div>
          <p class="m-0 text-xs text-muted-foreground">Additional symptom frequency</p>
        </div>
      </div>

      <div id="asrs-result-interpretation" class="p-5 rounded-lg border-l-4 text-sm leading-relaxed bg-surface border-primary text-foreground mb-6"></div>

      <div class="text-xs text-muted-foreground border-t border-border pt-4">
        * This screener is for educational use only and does not constitute a formal diagnosis. Your answers remain strictly private on your device; no health data is transmitted or stored.
      </div>
    </div>

    <div class="text-center mt-6">
      <button type="button" onclick="downloadASRSImage()" class="bg-primary text-primary-foreground font-display font-medium px-6 py-3 rounded-pill inline-flex items-center gap-2 text-sm shadow-float hover:opacity-95 transition-opacity cursor-pointer">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
        Download Results as Image / PDF
      </button>
    </div>
  </div>
</div>

<style>
.asrs-q-card { background: var(--color-card, #ffffff); border: 1px solid var(--color-border, #e2e8f0); border-radius: 12px; padding: 20px; margin-bottom: 16px; transition: border-color 0.2s; }
.asrs-q-card:hover { border-color: var(--color-primary, #0ea5e9); }
.asrs-q-text { font-size: 15px; font-weight: 600; color: var(--color-foreground, #0f172a); margin-bottom: 14px; line-height: 1.5; }
.asrs-options { display: flex; flex-wrap: wrap; gap: 8px; }
.asrs-option { flex: 1 1 18%; min-width: 100px; }
.asrs-option input[type="radio"] { position: absolute; opacity: 0; width: 0; height: 0; }
.asrs-option label { display: flex; align-items: center; justify-content: center; width: 100%; padding: 10px 8px; background: var(--color-surface, #f8fafc); border: 1px solid var(--color-border, #e2e8f0); border-radius: 8px; cursor: pointer; font-size: 13px; font-weight: 500; color: var(--color-muted-foreground, #64748b); transition: all 0.15s; text-align: center; }
.asrs-option input[type="radio"]:checked + label { background: var(--color-primary, #0ea5e9); border-color: var(--color-primary, #0ea5e9); color: var(--color-primary-foreground, #ffffff); font-weight: 600; }
.asrs-option label:hover { border-color: var(--color-primary, #0ea5e9); }
.asrs-part-heading { font-size: 18px; font-weight: 700; color: var(--color-foreground, #0f172a); margin: 32px 0 16px 0; padding-bottom: 8px; border-bottom: 1px solid var(--color-border, #e2e8f0); }
@media (max-width: 640px) { .asrs-option { flex: 1 1 100%; } .asrs-q-card { padding: 14px; } }
</style>

<script>
(function() {
  const asrsQuestions = [
    { id: 1, text: "How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?", part: 'A', threshold: 2 },
    { id: 2, text: "How often do you have difficulty getting things in order when you have to do a task that requires organization?", part: 'A', threshold: 2 },
    { id: 3, text: "How often do you have problems remembering appointments or obligations?", part: 'A', threshold: 2 },
    { id: 4, text: "When you have a task that requires a lot of thought, how often do you avoid or delay getting started?", part: 'A', threshold: 3 },
    { id: 5, text: "How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?", part: 'A', threshold: 3 },
    { id: 6, text: "How often do you feel overly active and compelled to do things, like you were driven by a motor?", part: 'A', threshold: 3 },
    { id: 7, text: "How often do you make careless mistakes when you have to work on a boring or difficult project?", part: 'B', threshold: 3 },
    { id: 8, text: "How often do you have difficulty keeping your attention when you are doing boring or repetitive work?", part: 'B', threshold: 3 },
    { id: 9, text: "How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?", part: 'B', threshold: 2 },
    { id: 10, text: "How often do you misplace or have difficulty finding things at home or at work?", part: 'B', threshold: 3 },
    { id: 11, text: "How often are you distracted by activity or noise around you?", part: 'B', threshold: 3 },
    { id: 12, text: "How often do you leave your seat in meetings or other situations in which you are expected to remain seated?", part: 'B', threshold: 2 },
    { id: 13, text: "How often do you feel restless or fidgety?", part: 'B', threshold: 3 },
    { id: 14, text: "How often do you have difficulty unwinding and relaxing when you have time to yourself?", part: 'B', threshold: 3 },
    { id: 15, text: "How often do you find yourself talking too much when you are in social situations?", part: 'B', threshold: 3 },
    { id: 16, text: "When you are in a conversation, how often do you find yourself finishing the sentences of the people you are talking to?", part: 'B', threshold: 2 },
    { id: 17, text: "How often do you have difficulty waiting your turn in situations when turn taking is required?", part: 'B', threshold: 3 },
    { id: 18, text: "How often do you interrupt others when they are busy?", part: 'B', threshold: 2 }
  ];

  const asrsOptions = [
    { label: "Never", value: 0 },
    { label: "Rarely", value: 1 },
    { label: "Sometimes", value: 2 },
    { label: "Often", value: 3 },
    { label: "Very Often", value: 4 }
  ];

  function buildQuestionHTML(q) {
    let opts = asrsOptions.map((opt, idx) => {
      const inputId = `q${q.id}_opt${idx}`;
      return `<div class="asrs-option"><input type="radio" id="${inputId}" name="q${q.id}" value="${opt.value}" onchange="autoAdvance(${q.id})"><label for="${inputId}">${opt.label}</label></div>`;
    }).join("");
    return `<div class="asrs-q-card" id="qcard-${q.id}"><div class="asrs-q-text">${q.id}. ${q.text}</div><div class="asrs-options">${opts}</div></div>`;
  }

  function initASRS() {
    const form = document.getElementById("asrs-form");
    if (!form || form.getAttribute("data-initialized") === "true") return;
    form.setAttribute("data-initialized", "true");

    let html = `<div class="asrs-part-heading">Part A (Primary Screener)</div>`;
    asrsQuestions.filter(q => q.part === 'A').forEach(q => html += buildQuestionHTML(q));
    html += `<div class="asrs-part-heading">Part B (Symptom Frequency)</div>`;
    asrsQuestions.filter(q => q.part === 'B').forEach(q => html += buildQuestionHTML(q));
    form.innerHTML = html;
  }

  window.autoAdvance = function(currentId) {
    const nextId = currentId + 1;
    setTimeout(() => {
      const nextCard = document.getElementById(`qcard-${nextId}`);
      if (nextCard) {
        nextCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        const submitContainer = document.getElementById('asrs-submit-container');
        if (submitContainer) submitContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 220);
  };

  window.calculateASRS = function() {
    let scoreA = 0;
    let scoreB = 0;
    let missing = [];

    asrsQuestions.forEach(q => {
      const card = document.getElementById(`qcard-${q.id}`);
      if (card) card.style.borderColor = "";
    });

    asrsQuestions.forEach(q => {
      const radios = document.getElementsByName(`q${q.id}`);
      let answered = false;
      let selectedValue = 0;
      for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          answered = true;
          selectedValue = parseInt(radios[i].value, 10);
          break;
        }
      }
      if (!answered) {
        missing.push(q.id);
        const card = document.getElementById(`qcard-${q.id}`);
        if (card) card.style.borderColor = "#ef4444";
      } else if (selectedValue >= q.threshold) {
        if (q.part === 'A') scoreA++;
        else scoreB++;
      }
    });

    if (missing.length > 0) {
      alert("Please complete all questions before calculating your results.");
      const firstMissing = document.getElementById(`qcard-${missing[0]}`);
      if (firstMissing) firstMissing.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const scoreAEl = document.getElementById('asrs-score-a');
    const scoreBEl = document.getElementById('asrs-score-b');
    if (scoreAEl) scoreAEl.innerText = scoreA + " / 6";
    if (scoreBEl) scoreBEl.innerText = scoreB + " / 12";

    const interp = document.getElementById('asrs-result-interpretation');
    if (interp) {
      if (scoreA >= 4) {
        interp.innerHTML = "<strong>Interpretation:</strong> A score of 4 or higher in Part A indicates symptoms highly consistent with adult ADHD. Further evaluation by a medical professional or psychiatrist is strongly recommended.";
      } else {
        interp.innerHTML = "<strong>Interpretation:</strong> Your score in Part A suggests fewer typical ADHD symptoms. If you continue to experience executive difficulties or distress, a comprehensive clinical review with your GP is advised.";
      }
    }

    const dateEl = document.getElementById('asrs-result-date');
    if (dateEl) dateEl.innerText = new Date().toLocaleDateString("en-NZ", { year: "numeric", month: "long", day: "numeric" });

    const resultsSection = document.getElementById('asrs-results-section');
    if (resultsSection) {
      resultsSection.style.display = 'block';
      resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  window.downloadASRSImage = function() {
    const scoreAEl = document.getElementById('asrs-score-a');
    const scoreBEl = document.getElementById('asrs-score-b');
    const interpEl = document.getElementById('asrs-result-interpretation');

    const scoreA = scoreAEl ? scoreAEl.innerText : "0 / 6";
    const scoreB = scoreBEl ? scoreBEl.innerText : "0 / 12";
    const interpText = interpEl ? interpEl.innerText.replace('Interpretation: ', '') : '';
    const isHigh = parseInt(scoreA.split('/')[0], 10) >= 4;
    const dateStr = new Date().toLocaleDateString("en-NZ", { year: "numeric", month: "long", day: "numeric" });

    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 760;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, 1200, 760);
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 4;
    ctx.strokeRect(20, 20, 1160, 720);

    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 32px system-ui, -apple-system, sans-serif';
    ctx.fillText('ASRS v1.1 Adult ADHD Screening Summary', 60, 80);

    ctx.fillStyle = '#64748b';
    ctx.font = '20px system-ui, -apple-system, sans-serif';
    ctx.fillText('Assessment Date: ' + dateStr, 60, 115);

    function drawCard(x, y, w, h, r, fillColor, strokeColor) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
      if (fillColor) { ctx.fillStyle = fillColor; ctx.fill(); }
      if (strokeColor) { ctx.strokeStyle = strokeColor; ctx.lineWidth = 2; ctx.stroke(); }
    }

    drawCard(60, 150, 520, 190, 16, '#f8fafc', '#cbd5e1');
    ctx.textAlign = 'center';
    ctx.fillStyle = '#475569';
    ctx.font = 'bold 22px system-ui, -apple-system, sans-serif';
    ctx.fillText('Part A (Predictive Screener)', 320, 195);
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 56px system-ui, -apple-system, sans-serif';
    ctx.fillText(scoreA, 320, 265);
    ctx.fillStyle = '#64748b';
    ctx.font = '18px system-ui, -apple-system, sans-serif';
    ctx.fillText('Threshold: 4 or more', 320, 305);

    drawCard(620, 150, 520, 190, 16, '#f8fafc', '#cbd5e1');
    ctx.fillStyle = '#475569';
    ctx.font = 'bold 22px system-ui, -apple-system, sans-serif';
    ctx.fillText('Part B (Symptom Frequency)', 880, 195);
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 56px system-ui, -apple-system, sans-serif';
    ctx.fillText(scoreB, 880, 265);
    ctx.fillStyle = '#64748b';
    ctx.font = '18px system-ui, -apple-system, sans-serif';
    ctx.fillText('Checklist Context', 880, 305);

    ctx.textAlign = 'left';
    drawCard(60, 370, 1080, 160, 12, '#f1f5f9', null);
    ctx.fillStyle = isHigh ? '#0284c7' : '#10b981';
    ctx.fillRect(60, 370, 12, 160);

    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 20px system-ui, -apple-system, sans-serif';
    ctx.fillText('Clinical Interpretation:', 95, 415);
    ctx.fillStyle = '#1e293b';
    ctx.font = '19px system-ui, -apple-system, sans-serif';

    const words = interpText.split(' ');
    let line = '';
    let lineY = 450;
    for (let n = 0; n < words.length; n++) {
      let testLine = line + words[n] + ' ';
      if (ctx.measureText(testLine).width > 980 && n > 0) {
        ctx.fillText(line, 95, lineY);
        line = words[n] + ' ';
        lineY += 28;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, 95, lineY);

    ctx.beginPath();
    ctx.moveTo(60, 570);
    ctx.lineTo(1140, 570);
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#64748b';
    ctx.font = '15px system-ui, -apple-system, sans-serif';
    ctx.fillText('* Screening tool for informational purposes only. Not a medical diagnosis.', 60, 610);
    ctx.fillText('Bring this summary to your General Practitioner (GP) for clinical discussion.', 60, 636);

    const link = document.createElement('a');
    link.download = 'DrTorrance-ADHD-Screening-Summary.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initASRS);
  } else {
    initASRS();
  }
  document.addEventListener("astro:page-load", initASRS);
})();
</script>

## What to Do With Your Results

If your Part A score is 4 or higher, your self-reported symptoms are consistent with adult ADHD. Here are recommended next steps:

1. **Download the Summary**: Click the button above to generate a summary image of your scores.
2. **Book a Double Appointment**: Contact your General Practice and ask for a 30-minute double consultation to discuss mental health and ADHD screening.
3. **Gather Context**: Think about how these traits showed up in your childhood or schooling, and how they currently affect your work and personal life.
4. **Discuss Pathways**: Your GP can evaluate other contributing medical factors, rule out mimics, and refer you to a specialist psychiatrist for formal diagnostic assessment and Special Authority medication approval.
