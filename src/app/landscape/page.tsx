"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";

type LayerId = "L1" | "L2" | "L3" | "L4" | "L5" | "L6" | "L7";

interface LayerCompany {
  name: string;
  funding: string;
  note: string;
  url?: string;
  isGap?: boolean;
}

interface Layer {
  id: LayerId;
  name: string;
  question: string;
  color: string;
  accent: string;
  companies: LayerCompany[];
  isWhiteSpace?: boolean;
}

const layers: Layer[] = [
  {
    id: "L7",
    name: "Governance, Lineage & Explainability",
    question: "Can we prove why we did it?",
    color: "#1a1a2e",
    accent: "#e94560",
    companies: [
      { name: "Palantir Foundry", funding: "Public", note: "Full data lineage + AI decision provenance", url: "https://www.palantir.com" },
      { name: "Fero Labs", funding: "$40M", note: "Explainable ML — every prediction comes with a reason", url: "https://www.ferolabs.com" },
      { name: "Cognite", funding: "$300M+", note: "Data lineage across industrial knowledge graphs", url: "https://www.cognite.com" },
      { name: "Dataiku", funding: "$800M+", note: "Enterprise AI governance & model monitoring", url: "https://www.dataiku.com" },
    ],
  },
  {
    id: "L6",
    name: "Workflow Orchestration & Agents",
    question: "How do we execute at scale?",
    color: "#16213e",
    accent: "#f59e0b",
    companies: [
      { name: "Synera", funding: "$14.8M", note: "AI Agent Platform for Engineering; BMW, Airbus, NASA", url: "https://www.synera.io" },
      { name: "Waylay", funding: "$10M+", note: "Hybrid AI + rule-based workflow orchestration", url: "https://www.waylay.io" },
      { name: "Tulip", funding: "$100M+", note: "No-code frontline operations platform", url: "https://tulip.co" },
      { name: "Machina Labs", funding: "$124M", note: "AI + robotics manufacturing with full part provenance", url: "https://machinalabs.com" },
    ],
  },
  {
    id: "L5",
    name: "Decision & Optimization",
    question: "What should we do about it?",
    color: "#0f3460",
    accent: "#10b981",
    companies: [
      { name: "Flexciton", funding: "$30M", note: "AI production scheduling for semiconductor fabs", url: "https://flexciton.com" },
      { name: "Oden Technologies", funding: "$30M", note: "Prescriptive insights for process engineers", url: "https://oden.io" },
      { name: "Braincube", funding: "$30M+", note: "Closed-loop process optimization", url: "https://braincube.com" },
      { name: "Cosmotech", funding: "$25M", note: "Simulation Digital Twin for scenario-based decisions", url: "https://cosmotech.com" },
    ],
  },
  {
    id: "L4",
    name: "Reasoning & Inference",
    question: "Why is this happening?",
    color: "#1a1a2e",
    accent: "#ff6b6b",
    isWhiteSpace: true,
    companies: [
      { name: "Palantir AIP", funding: "Public", note: "LLM reasoning over ontological data", url: "https://www.palantir.com" },
      { name: "C3.ai", funding: "Public", note: "Enterprise AI with reliability analytics", url: "https://c3.ai" },
      { name: "Monolith AI", funding: "$20M+", note: "Learned physics replaces simulation", url: "https://www.monolithai.com" },
      { name: "??? THE GAP ???", funding: "—", note: "No startup owns industrial reasoning as a first-class primitive", isGap: true },
    ],
  },
  {
    id: "L3",
    name: "Perception & Anomaly Detection",
    question: "What does this mean?",
    color: "#0f3460",
    accent: "#8b5cf6",
    companies: [
      { name: "Fero Labs", funding: "$40M", note: "Explainable ML for process manufacturing", url: "https://www.ferolabs.com" },
      { name: "Sight Machine", funding: "$80M+", note: "Digital twin of the production process", url: "https://sightmachine.com" },
      { name: "EthonAI", funding: "$16.5M", note: "Automates root-cause analysis for defects", url: "https://ethon.ai" },
      { name: "Instrumental", funding: "$50M+", note: "AI visual inspection for electronics (acq. by Apple)", url: "https://instrumental.com" },
    ],
  },
  {
    id: "L2",
    name: "Industrial Data Fabric",
    question: "How does data connect?",
    color: "#16213e",
    accent: "#06b6d4",
    companies: [
      { name: "Cognite", funding: "$300M+", note: "Industrial DataOps; knowledge graphs; digital twin backbone", url: "https://www.cognite.com" },
      { name: "Palantir Foundry", funding: "Public", note: "Ontology-based enterprise data integration", url: "https://www.palantir.com" },
      { name: "Arundo Analytics", funding: "$50M", note: "AI for heavy asset industries; knowledge graphs", url: "https://www.arundo.com" },
      { name: "Seeq", funding: "$115M", note: "Advanced analytics for time-series process data", url: "https://www.seeq.com" },
    ],
  },
  {
    id: "L1",
    name: "Sensing & Edge Intelligence",
    question: "What is happening right now?",
    color: "#1a1a2e",
    accent: "#3b82f6",
    companies: [
      { name: "Litmus", funding: "$73M+", note: "Edge data platform; 250+ industrial connectors", url: "https://litmus.io" },
      { name: "Augury", funding: "$300M+", note: "IoT sensors + AI; 500M+ hours of machine data", url: "https://www.augury.com" },
      { name: "TRACTIAN", funding: "$180M+", note: "Industrial Copilot; hardware + AI for asset monitoring", url: "https://tractian.com" },
      { name: "Dynamox", funding: "—", note: "Wireless vibration/temp sensors for mining", url: "https://dynamox.net" },
    ],
  },
];

const crossLayerMovers: { name: string; layers: LayerId[]; color: string; url?: string }[] = [
  { name: "Palantir", layers: ["L2", "L4", "L7"], color: "#e94560", url: "https://www.palantir.com" },
  { name: "Cognite", layers: ["L2", "L7"], color: "#06b6d4", url: "https://www.cognite.com" },
  { name: "Augury", layers: ["L1", "L3"], color: "#3b82f6", url: "https://www.augury.com" },
  { name: "Synera", layers: ["L5", "L6"], color: "#f59e0b", url: "https://www.synera.io" },
  { name: "Fero Labs", layers: ["L3", "L7"], color: "#8b5cf6", url: "https://www.ferolabs.com" },
  { name: "TRACTIAN", layers: ["L1", "L3", "L5"], color: "#10b981", url: "https://tractian.com" },
  { name: "Machina Labs", layers: ["L5", "L6", "L7"], color: "#ff6b6b", url: "https://machinalabs.com" },
];

type ViewMode = "stack" | "bridges";

// Deduplicated company list for the directory (by URL), with short description
function getCompaniesDirectory(): { name: string; url: string; note: string }[] {
  const byUrl = new Map<string, { name: string; note: string }>();
  for (const layer of layers) {
    for (const company of layer.companies) {
      if (company.isGap || !company.url) continue;
      if (!byUrl.has(company.url)) {
        byUrl.set(company.url, { name: company.name, note: company.note });
      }
    }
  }
  return Array.from(byUrl.entries())
    .map(([url, { name, note }]) => ({ name, url, note }))
    .sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }));
}

const companiesDirectory = getCompaniesDirectory();

export default function LandscapePage() {
  const [selectedLayer, setSelectedLayer] = useState<LayerId | null>(null);
  const [hoveredCompany, setHoveredCompany] = useState<string | null>(null);
  const [view, setView] = useState<ViewMode>("stack");

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e0e0e0] font-mono">
      <Navbar />
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "7rem 1.5rem 3rem",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "0.5rem",
            }}
          >
            <div
              style={{
                width: 8,
                height: 40,
                background: "linear-gradient(180deg, #e94560, #f59e0b, #10b981, #3b82f6)",
                borderRadius: 4,
              }}
            />
            <h1
              style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                margin: 0,
                background: "linear-gradient(135deg, #fff 0%, #a0a0b0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Digital Reasoning Thread — Startup Landscape
            </h1>
          </div>
          <p
            style={{
              fontSize: "0.8rem",
              color: "#606080",
              margin: 0,
              paddingLeft: "1.5rem",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            The Kubernetes of Industrial Reasoning — 7 Layers, 30+ Companies, 1 Missing Thread
          </p>

          {/* Intro: what we do here and why */}
          <blockquote
            style={{
              margin: "1.5rem 0 0 1.5rem",
              paddingLeft: "1rem",
              borderLeft: "3px solid #2a2a3e",
              color: "#9090a0",
              fontSize: "0.85rem",
              lineHeight: 1.6,
            }}
          >
            The Digital Reasoning Thread (DRT) isn&apos;t being built by one company. It&apos;s
            emerging — layer by layer — from dozens of startups that don&apos;t yet know
            they&apos;re building the same thing. Here we map who they are, where they fit
            in the 7-layer stack, and what&apos;s still missing: the vertical connective
            tissue that would run from sensing (L1) through governance (L7).             Use the
            interactive stack below to explore layers and companies; switch to
            &ldquo;Cross-Layer Bridges&rdquo; to see who already spans multiple layers.
          </blockquote>

          {/* 7-layer stack reference */}
          <p
            style={{
              fontSize: "0.7rem",
              color: "#606080",
              marginTop: "1.25rem",
              marginBottom: "0.5rem",
              paddingLeft: "1.5rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            The 7-layer DRT stack
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr auto",
              gap: "0.25rem 1rem",
              fontSize: "0.7rem",
              color: "#808098",
              paddingLeft: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            {[
              ["L1", "Sensing & Edge Intelligence", "What is happening right now?"],
              ["L2", "Industrial Data Fabric", "How does data connect?"],
              ["L3", "Perception & Anomaly Detection", "What does this mean?"],
              ["L4", "Reasoning & Inference", "Why is this happening?"],
              ["L5", "Decision & Optimization", "What should we do about it?"],
              ["L6", "Workflow Orchestration & Agents", "How do we execute at scale?"],
              ["L7", "Governance, Lineage & Explainability", "Can we prove why we did it?"],
            ].map(([id, name, q]) => (
              <span key={id} style={{ display: "contents" }}>
                <span style={{ fontWeight: 700, color: "#a0a0b0" }}>{id}</span>
                <span>{name}</span>
                <span style={{ fontStyle: "italic", color: "#606080" }}>{q}</span>
              </span>
            ))}
          </div>

          {/* View Toggle */}
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              marginTop: "1.25rem",
              paddingLeft: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            {(["stack", "bridges"] as ViewMode[]).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setView(v)}
                style={{
                  padding: "0.4rem 1rem",
                  fontSize: "0.7rem",
                  fontFamily: "inherit",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  border: `1px solid ${view === v ? "#e94560" : "#2a2a3e"}`,
                  background: view === v ? "rgba(233, 69, 96, 0.15)" : "transparent",
                  color: view === v ? "#e94560" : "#606080",
                  borderRadius: 4,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {v === "stack" ? "▧ Stack View" : "⬡ Cross-Layer Bridges"}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {view === "stack" ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
            {layers.map((layer) => {
              const isSelected = selectedLayer === layer.id;
              return (
                <div
                  key={layer.id}
                  onClick={() => setSelectedLayer(isSelected ? null : layer.id)}
                  style={{
                    background: layer.color,
                    border: `1px solid ${isSelected ? layer.accent : "#1e1e30"}`,
                    borderRadius: 6,
                    padding: isSelected ? "1.25rem" : "0.75rem 1.25rem",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {layer.isWhiteSpace && (
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        background: "rgba(255, 107, 107, 0.08)",
                        border: "1px dashed rgba(255, 107, 107, 0.3)",
                        borderRadius: "0 6px 0 6px",
                        padding: "0.2rem 0.6rem",
                        fontSize: "0.6rem",
                        color: "#ff6b6b",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                      }}
                    >
                      ⚠ White Space
                    </div>
                  )}

                  {/* Layer Header */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.75rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <span
                        style={{
                          fontSize: "0.65rem",
                          fontWeight: 700,
                          color: layer.accent,
                          background: `${layer.accent}15`,
                          padding: "0.2rem 0.5rem",
                          borderRadius: 3,
                          letterSpacing: "0.05em",
                        }}
                      >
                        {layer.id}
                      </span>
                      <span
                        style={{
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          color: "#fff",
                        }}
                      >
                        {layer.name}
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        color: "#505070",
                        fontStyle: "italic",
                      }}
                    >
                      {layer.question}
                    </span>
                  </div>

                  {/* Company Cards (expanded) */}
                  {isSelected && (
                    <div
                      style={{
                        marginTop: "1rem",
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
                        gap: "0.5rem",
                      }}
                    >
                      {layer.companies.map((company) => (
                        <div
                          key={company.name}
                          onMouseEnter={() => setHoveredCompany(company.name)}
                          onMouseLeave={() => setHoveredCompany(null)}
                          style={{
                            background: company.isGap
                              ? "repeating-linear-gradient(45deg, rgba(255,107,107,0.05), rgba(255,107,107,0.05) 10px, transparent 10px, transparent 20px)"
                              : "rgba(255,255,255,0.03)",
                            border: company.isGap
                              ? "1px dashed rgba(255, 107, 107, 0.4)"
                              : `1px solid ${
                                  hoveredCompany === company.name
                                    ? `${layer.accent}60`
                                    : "rgba(255,255,255,0.06)"
                                }`,
                            borderRadius: 5,
                            padding: "0.75rem",
                            transition: "all 0.2s",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              marginBottom: "0.35rem",
                              gap: "0.25rem",
                            }}
                          >
                            {company.url ? (
                              <a
                                href={company.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  fontSize: "0.8rem",
                                  fontWeight: 700,
                                  color: company.isGap ? "#ff6b6b" : "#fff",
                                  textDecoration: "none",
                                }}
                                className="hover:underline"
                              >
                                {company.name}
                              </a>
                            ) : (
                              <span
                                style={{
                                  fontSize: "0.8rem",
                                  fontWeight: 700,
                                  color: company.isGap ? "#ff6b6b" : "#fff",
                                }}
                              >
                                {company.name}
                              </span>
                            )}
                            {!company.isGap && (
                              <span
                                style={{
                                  fontSize: "0.6rem",
                                  color: layer.accent,
                                  fontWeight: 600,
                                }}
                              >
                                {company.funding}
                              </span>
                            )}
                          </div>
                          <p
                            style={{
                              fontSize: "0.65rem",
                              color: company.isGap ? "rgba(255, 107, 107, 0.7)" : "#808098",
                              margin: 0,
                              lineHeight: 1.4,
                            }}
                          >
                            {company.note}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Collapsed company names */}
                  {!isSelected && (
                    <div
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        marginTop: "0.4rem",
                        flexWrap: "wrap",
                      }}
                    >
                      {layer.companies
                        .filter((company) => !company.isGap)
                        .map((company) =>
                          company.url ? (
                            <a
                              key={company.name}
                              href={company.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                fontSize: "0.6rem",
                                color: "#505070",
                                background: "rgba(255,255,255,0.03)",
                                padding: "0.15rem 0.4rem",
                                borderRadius: 3,
                                textDecoration: "none",
                              }}
                              className="hover:text-[#808098] hover:underline"
                            >
                              {company.name}
                            </a>
                          ) : (
                            <span
                              key={company.name}
                              style={{
                                fontSize: "0.6rem",
                                color: "#505070",
                                background: "rgba(255,255,255,0.03)",
                                padding: "0.15rem 0.4rem",
                                borderRadius: 3,
                              }}
                            >
                              {company.name}
                            </span>
                          )
                        )}
                      {layer.isWhiteSpace && (
                        <span
                          style={{
                            fontSize: "0.6rem",
                            color: "#ff6b6b",
                            background: "rgba(255,107,107,0.08)",
                            padding: "0.15rem 0.4rem",
                            borderRadius: 3,
                          }}
                        >
                          ← THE GAP
                        </span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}

            {/* DRT Thread indicator */}
            <div
              style={{
                marginTop: "1.5rem",
                padding: "1rem 1.25rem",
                border: "1px dashed #e94560",
                borderRadius: 6,
                background: "rgba(233, 69, 96, 0.04)",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#e94560",
                  margin: 0,
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                ↕ The Digital Reasoning Thread
              </p>
              <p
                style={{
                  fontSize: "0.65rem",
                  color: "#808098",
                  margin: "0.4rem 0 0",
                }}
              >
                The persistent, composable, traceable vertical thread connecting L1→L7 — this is
                what&apos;s missing from the landscape today.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <p
              style={{
                fontSize: "0.75rem",
                color: "#606080",
                marginBottom: "1.25rem",
                lineHeight: 1.5,
              }}
            >
              These companies span multiple DRT layers — bridging the gaps that the thread will
              eventually connect. The more layers a company spans, the closer it is to DRT-native
              architecture.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {crossLayerMovers.map((mover) => (
                <div
                  key={mover.name}
                  style={{
                    background: "#12121e",
                    border: `1px solid ${mover.color}30`,
                    borderRadius: 6,
                    padding: "1rem 1.25rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {mover.url ? (
                      <a
                        href={mover.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "0.9rem",
                          fontWeight: 700,
                          color: "#fff",
                          textDecoration: "none",
                        }}
                        className="hover:underline"
                      >
                        {mover.name}
                      </a>
                    ) : (
                      <span
                        style={{
                          fontSize: "0.9rem",
                          fontWeight: 700,
                          color: "#fff",
                        }}
                      >
                        {mover.name}
                      </span>
                    )}
                    <span
                      style={{
                        fontSize: "0.6rem",
                        color: mover.color,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {mover.layers.length} layers
                    </span>
                  </div>

                  {/* Layer span visualization */}
                  <div style={{ display: "flex", gap: "2px" }}>
                    {["L7", "L6", "L5", "L4", "L3", "L2", "L1"].map((layerId) => {
                      const isActive = mover.layers.includes(layerId as LayerId);
                      return (
                        <div
                          key={layerId}
                          style={{
                            flex: 1,
                            height: 28,
                            borderRadius: 3,
                            background: isActive ? `${mover.color}30` : "rgba(255,255,255,0.02)",
                            border: isActive
                              ? `1px solid ${mover.color}50`
                              : "1px solid rgba(255,255,255,0.04)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.2s",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "0.55rem",
                              fontWeight: isActive ? 700 : 400,
                              color: isActive ? mover.color : "#303050",
                            }}
                          >
                            {layerId}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Insight box */}
            <div
              style={{
                marginTop: "1.5rem",
                padding: "1rem 1.25rem",
                background: "rgba(233, 69, 96, 0.04)",
                border: "1px solid rgba(233, 69, 96, 0.2)",
                borderRadius: 6,
              }}
            >
              <p
                style={{
                  fontSize: "0.7rem",
                  color: "#e94560",
                  margin: 0,
                  fontWeight: 600,
                  marginBottom: "0.3rem",
                }}
              >
                Key Observation
              </p>
              <p
                style={{
                  fontSize: "0.7rem",
                  color: "#808098",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                Palantir spans the most layers (L2+L4+L7) but approaches from a general-purpose
                direction. No company spans the full stack with industrial-native reasoning. The DRT
                is the missing vertical integration pattern.
              </p>
            </div>
          </div>
        )}

        {/* Explanation: the white space & what comes next */}
        <section
          style={{
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: "1px solid #1e1e30",
          }}
        >
          <h2
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: "#e0e0e0",
              marginBottom: "1rem",
              letterSpacing: "0.02em",
            }}
          >
            The white space: what&apos;s missing
          </h2>
          <p
            style={{
              fontSize: "0.8rem",
              color: "#9090a0",
              lineHeight: 1.65,
              marginBottom: "1rem",
            }}
          >
            Two things are missing. <strong style={{ color: "#e0e0e0" }}>First, layer 4 is thin.</strong>{" "}
            No startup owns &ldquo;industrial reasoning&rdquo; as a first-class capability. Palantir&apos;s
            AIP touches it from a general-purpose direction; the industrial-specific, physics-aware,
            safety-constrained reasoning layer is essentially unoccupied.{" "}
            <strong style={{ color: "#e0e0e0" }}>Second, the vertical thread doesn&apos;t exist.</strong>{" "}
            Every company in this landscape operates at one or two layers. None provides the persistent,
            composable, traceable chain of reasoning that connects a sensor signal (L1) through
            contextualization (L2), perception (L3), reasoning (L4), decision (L5), execution (L6),
            and governance (L7). That thread is the DRT.
          </p>

          <h2
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: "#e0e0e0",
              marginTop: "1.5rem",
              marginBottom: "1rem",
              letterSpacing: "0.02em",
            }}
          >
            What comes next
          </h2>
          <p
            style={{
              fontSize: "0.8rem",
              color: "#9090a0",
              lineHeight: 1.65,
              marginBottom: "0.5rem",
            }}
          >
            The Digital Reasoning Thread is not a product to be built from scratch. It&apos;s an{" "}
            <strong style={{ color: "#e0e0e0" }}>integration pattern</strong> — an architectural
            standard that connects what already exists. Next steps: standardize the Thread Context
            object; build reference implementations (e.g. Cognite L2 → Fero L3/L7 → Synera L6 with
            full lineage); and engage the ecosystem. The companies on this landscape are natural
            allies — they&apos;re building pieces of the same puzzle. The DRT gives them a shared
            language and a shared architecture.
          </p>
          <p
            style={{
              fontSize: "0.75rem",
              color: "#606080",
              lineHeight: 1.6,
              fontStyle: "italic",
            }}
          >
            This landscape is a living document. If you&apos;re building in this space, we&apos;d love to
            map you in. Reach out via the links in the footer.
          </p>
        </section>

        {/* Companies directory */}
        <section
          style={{
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: "1px solid #1e1e30",
          }}
        >
          <h2
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: "#e0e0e0",
              marginBottom: "0.5rem",
              letterSpacing: "0.02em",
            }}
          >
            Companies in this landscape
          </h2>
          <p
            style={{
              fontSize: "0.75rem",
              color: "#606080",
              marginBottom: "1.25rem",
              lineHeight: 1.5,
            }}
          >
            Startups and companies we mention on this page, with a short note on what they do. Links
            go to their official sites.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "0.75rem",
            }}
          >
            {companiesDirectory.map((company) => (
              <a
                key={company.url}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  padding: "0.875rem 1rem",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 6,
                  textDecoration: "none",
                  color: "inherit",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                className="hover:border-[#2a2a3e] hover:bg-[rgba(255,255,255,0.05)]"
              >
                <span
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#fff",
                    display: "block",
                    marginBottom: "0.35rem",
                  }}
                >
                  {company.name}
                </span>
                <span
                  style={{
                    fontSize: "0.7rem",
                    color: "#808098",
                    lineHeight: 1.45,
                  }}
                >
                  {company.note}
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

