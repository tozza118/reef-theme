---
title: "ADHD Self Test"
description: "Adult ADHD Self-Report Scale (ASRS v1.1) screener and symptom checklist."
pubDate: 2026-09-08
author: en/torrance-merkle
topic: en/adhd
tags: ["adhd", "health", "screener", "test"]
cover: ../../../assets/covers/adhd-wooden-blocks.webp
coverAlt: "Wooden blocks spelling ADHD arranged on a wooden table, with someone arranging them"
featured: true
draft: false
---

<!-- ASRS v1.1 Questionnaire Embed with Auto-Advance & Native PNG Generator -->
<div id="asrs-questionnaire-container" style="max-width: 800px; margin: 0 auto; font-family: system-ui, -apple-system, sans-serif; color: #1e293b;">
<div style="text-align: center; margin-bottom: 30px;">
<h2 style="font-size: 26px; font-weight: bold; margin-bottom: 10px;">Adult ADHD Self-Report Scale (ASRS v1.1)</h2>
<p style="color: #64748b; font-size: 15px; line-height: 1.6;">Please answer the questions below, rating yourself on each of the criteria based on how you have felt and conducted yourself over the <strong>past 6 months</strong>.</p>
</div>

<form id="asrs-form"></form>

<div id="asrs-submit-container" style="text-align: center; margin-top: 30px;">
<button type="button" onclick="calculateASRS()" style="background: #0f172a; color: white; border: none; padding: 14px 32px; font-size: 16px; font-weight: 600; border-radius: 8px; cursor: pointer; transition: opacity 0.2s;">Calculate Results</button>
</div>

<!-- Results Section -->
<div id="asrs-results-section" style="display: none; margin-top: 40px;">
<div id="asrs-capture-area" style="padding: 40px; background: white; border-radius: 12px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
<h2 style="margin-top: 0; font-size: 22px; color: #0f172a;">ASRS v1.1 Results Summary</h2>
<p style="color: #64748b; margin-bottom: 24px;">Date: <span id="asrs-result-date"></span></p>

<div style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 24px;">
<div style="flex: 1; min-width: 200px; padding: 24px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 12px; text-align: center;">
<h3 style="margin: 0 0 10px 0; font-size: 16px; color: #475569;">Part A (Screener)</h3>
<div style="font-size: 42px; font-weight: 700; color: #0f172a;" id="asrs-score-a">0 / 6</div>
<p style="margin: 5px 0 0 0; font-size: 13px; color: #64748b;">(Predictive Screener)</p>
</div>
<div style="flex: 1; min-width: 200px; padding: 24px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 12px; text-align: center;">
<h3 style="margin: 0 0 10px 0; font-size: 16px; color: #475569;">Part B (Symptom Checklist)</h3>
<div style="font-size: 42px; font-weight: 700; color: #0f172a;" id="asrs-score-b">0 / 12</div>
<p style="margin: 5px 0 0 0; font-size: 13px; color: #64748b;">(Additional Context)</p>
</div>
</div>

<div id="asrs-result-interpretation" style="padding: 20px; background: #f1f5f9; border-left: 5px solid #3b82f6; border-radius: 4px; font-size: 15px; line-height: 1.5; color: #1e293b;"></div>

<div style="margin-top: 24px; font-size: 13px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 16px;">
* This tool is for educational and screening purposes only and does not constitute a medical diagnosis. Please share these results with a qualified healthcare professional. No data from this form has been saved or transmitted.
</div>
</div>

<div style="text-align: center; margin-top: 24px;">
<button type="button" onclick="downloadASRSImage()" style="background: #2563eb; color: white; border: none; padding: 12px 24px; font-size: 15px; font-weight: 500; border-radius: 8px; cursor: pointer; transition: background 0.2s; display: inline-flex; align-items: center; gap: 8px;">
<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
Download Results as Image
</button>
</div>
</div>
</div>

<style>
#asrs-questionnaire-container * { box-sizing: border-box; }
.asrs-q-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; margin-bottom: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.02); transition: border-color 0.2s; }
.asrs-q-card:hover { border-color: #cbd5e1; }
.asrs-q-text { font-size: 16px; font-weight: 600; color: #1e293b; margin-bottom: 16px; line-height: 1.5; }
.asrs-options { display: flex; flex-wrap: wrap; gap: 10px; }
.asrs-option { flex: 1; min-width: 120px; }
.asrs-option input[type="radio"] { position: absolute; opacity: 0; width: 0; height: 0; }
.asrs-option label { display: flex; align-items: center; justify-content: center; width: 100%; padding: 12px 10px; background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 500; color: #475569; transition: all 0.2s; text-align: center; }
.asrs-option input[type="radio"]:checked + label { background: #eff6ff; border-color: #3b82f6; color: #1d4ed8; }
.asrs-option input[type="radio"]:focus-visible + label { outline: 2px solid #3b82f6; outline-offset: 2px; }
.asrs-option label:hover { background: #f1f5f9; border-color: #cbd5e1; }
.asrs-part-heading { font-size: 20px; font-weight: bold; color: #0f172a; margin: 40px 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #e2e8f0; }
@media (max-width: 600px) {
  .asrs-option { flex: 1 1 100%; }
  .asrs-q-card { padding: 16px; }
}
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
    { id: 16, text: "When you're in a conversation, how often do you find yourself finishing the sentences of the people you are talking to, before they can finish them themselves?", part: 'B', threshold: 2 },
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

    let html = `<div class="asrs-part-heading">Part A</div>`;
    asrsQuestions.filter(q => q.part === 'A').forEach(q => html += buildQuestionHTML(q));
    html += `<div class="asrs-part-heading">Part B</div>`;
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
    }, 250);
  };

  window.calculateASRS = function() {
    let scoreA = 0;
    let scoreB = 0;
    let missing = [];

    asrsQuestions.forEach(q => {
      const card = document.getElementById(`qcard-${q.id}`);
      if (card) card.style.borderColor = "#e2e8f0";
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
      alert("Please answer all questions before calculating your results.");
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
        interp.innerHTML = "<strong>Interpretation:</strong> A score of 4 or higher in Part A indicates symptoms highly consistent with ADHD in adults. Further clinical investigation is highly warranted.";
        interp.style.borderLeftColor = "#3b82f6";
      } else {
        interp.innerHTML = "<strong>Interpretation:</strong> Your score in Part A suggests fewer symptoms commonly associated with ADHD. However, if you are experiencing significant difficulties, a clinical evaluation is always recommended.";
        interp.style.borderLeftColor = "#10b981";
      }
    }

    const dateEl = document.getElementById('asrs-result-date');
    if (dateEl) dateEl.innerText = new Date().toLocaleDateString();

    const resultsSection = document.getElementById('asrs-results-section');
    if (resultsSection) {
      resultsSection.style.display = 'block';
      resultsSection.scrollIntoView({ behavior: 'smooth' });
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
    const dateStr = new Date().toLocaleDateString();

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
    ctx.font = 'bold 32px system-ui, sans-serif';
    ctx.fillText('ASRS v1.1 Results Summary', 60, 80);

    ctx.fillStyle = '#64748b';
    ctx.font = '20px system-ui, sans-serif';
    ctx.fillText('Date: ' + dateStr, 60, 115);

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
    ctx.font = 'bold 22px system-ui, sans-serif';
    ctx.fillText('Part A (Screener)', 320, 195);
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 56px system-ui, sans-serif';
    ctx.fillText(scoreA, 320, 265);
    ctx.fillStyle = '#64748b';
    ctx.font = '18px system-ui, sans-serif';
    ctx.fillText('(Predictive Screener)', 320, 305);

    drawCard(620, 150, 520, 190, 16, '#f8fafc', '#cbd5e1');
    ctx.fillStyle = '#475569';
    ctx.font = 'bold 22px system-ui, sans-serif';
    ctx.fillText('Part B (Symptom Checklist)', 880, 195);
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 56px system-ui, sans-serif';
    ctx.fillText(scoreB, 880, 265);
    ctx.fillStyle = '#64748b';
    ctx.font = '18px system-ui, sans-serif';
    ctx.fillText('(Additional Context)', 880, 305);

    ctx.textAlign = 'left';
    drawCard(60, 370, 1080, 160, 12, '#f1f5f9', null);
    ctx.fillStyle = isHigh ? '#3b82f6' : '#10b981';
    ctx.fillRect(60, 370, 12, 160);

    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 20px system-ui, sans-serif';
    ctx.fillText('Interpretation:', 95, 415);
    ctx.fillStyle = '#1e293b';
    ctx.font = '20px system-ui, sans-serif';

    const words = interpText.split(' ');
    let line = '';
    let lineY = 450;
    for (let n = 0; n < words.length; n++) {
      let testLine = line + words[n] + ' ';
      if (ctx.measureText(testLine).width > 1000 && n > 0) {
        ctx.fillText(line, 95, lineY);
        line = words[n] + ' ';
        lineY += 30;
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

    ctx.fillStyle = '#94a3b8';
    ctx.font = '16px system-ui, sans-serif';
    ctx.fillText('* This tool is for educational and screening purposes only and does not constitute a medical diagnosis.', 60, 610);
    ctx.fillText('Please share these results with a qualified healthcare professional. No data from this form has been saved or transmitted.', 60, 640);

    const link = document.createElement('a');
    link.download = 'ADHD-Results-Summary.png';
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

