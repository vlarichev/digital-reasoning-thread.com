"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";

const layers = [
  {
    id: "L7",
    name: "Governance, Lineage & Explainability",
    question: "Can we prove why we did it?",
    color: "#1a1a2e",
    accent: "#e94560",
    companies: [
      { name: "Palantir Foundry", funding: "Public", note: "Full data lineage + AI decision provenance" },
      { name: "Fero Labs", funding: "$40M", note: "Explainable ML — every prediction comes with a reason" },
      { name: "Cognite", funding: "$300M+", note: "Data lineage across industrial knowledge graphs" },
      { name: "Dataiku", funding: "$800M+", note: "Enterprise AI governance & model monitoring" },
    ],
  },
  {
    id: "L6",
    name: "Workflow Orchestration & Agents",
    question: "How do we execute at scale?",
    color: "#16213e",
    accent: "#f59e0b",
    companies: [
      { name: "Synera", funding: "$14.8M", note: "AI Agent Platform for Engineering; BMW, Airbus, NASA" },
      { name: "Waylay", funding: "$10M+", note: "Hybrid AI + rule-based workflow orchestration" },
      { name: "Tulip", funding: "$100M+", note: "No-code frontline operations platform" },
      { name: "Machina Labs", funding: "$124M", note: "AI + robotics manufacturing with full part provenance" },
    ],
  },
  {
    id: "L5",
    name: "Decision & Optimization",
    question: "What should we do about it?",
    color: "#0f3460",
    accent: "#10b981",
    companies: [
      { name: "Flexciton", funding: "$30M", note: "AI production scheduling for semiconductor fabs" },
      { name: "Oden Technologies", funding: "$30M", note: "Prescriptive insights for process engineers" },
      { name: "Braincube", funding: "$30M+", note: "Closed-loop process optimization" },
      { name: "Cosmotech", funding: "$25M", note: "Simulation Digital Twin for scenario-based decisions" },
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
      { name: "Palantir AIP", funding: "Public", note: "LLM reasoning over ontological data" },
      { name: "C3.ai", funding: "Public", note: "Enterprise AI with reliability analytics" },
      { name: "Monolith AI", funding: "$20M+", note: "Learned physics replaces simulation" },
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
      { name: "Fero Labs", funding: "$40M", note: "Explainable ML for process manufacturing" },
      { name: "Sight Machine", funding: "$80M+", note: "Digital twin of the production process" },
      { name: "EthonAI", funding: "$16.5M", note: "Automates root-cause analysis for defects" },
      { name: "Instrumental", funding: "$50M+", note: "AI visual inspection for electronics (acq. by Apple)" },
    ],
  },
  {
    id: "L2",
    name: "Industrial Data Fabric",
    question: "How does data connect?",
    color: "#16213e",
    accent: "#06b6d4",
    companies: [
      { name: "Cognite", funding: "$300M+", note: "Industrial DataOps; knowledge graphs; digital twin backbone" },
      { name: "Palantir Foundry", funding: "Public", note: "Ontology-based enterprise data integration" },
      { name: "Arundo Analytics", funding: "$50M", note: "AI for heavy asset industries; knowledge graphs" },
      { name: "Seeq", funding: "$115M", note: "Advanced analytics for time-series process data" },
    ],
  },
  {
    id: "L1",
    name: "Sensing & Edge Intelligence",
    question: "What is happening right now?",
    color: "#1a1a2e",
    accent: "#3b82f6",
    companies: [
      { name: "Litmus", funding: "$73M+", note: "Edge data platform; 250+ industrial connectors" },
      { name: "Augury", funding: "$300M+", note: "IoT sensors + AI; 500M+ hours of machine data" },
      { name: "TRACTIAN", funding: "$180M+", note: "Industrial Copilot; hardware + AI for asset monitoring" },
      { name: "Dynamox", funding: "—", note: "Wireless vibration/temp sensors for mining" },
    ],
  },
] as const;

const crossLayerMovers = [
  { name: "Palantir", layers: ["L2", "L4", "L7"], color: "#e94560" },
  { name: "Cognite", layers: ["L2", "L7"], color: "#06b6d4" },
  { name: "Augury", layers: ["L1", "L3"], color: "#3b82f6" },
  { name: "Synera", layers: ["L5", "L6"], color: "#f59e0b" },
  { name: "Fero Labs", layers: ["L3", "L7"], color: "#8b5cf6" },
  { name: "TRACTIAN", layers: ["L1", "L3", "L5"], color: "#10b981" },
  { name: "Machina Labs", layers: ["L5", "L6", "L7"], color: "#ff6b6b" },
] as const;

type LayerId = (typeof layers)[number]["id"];
type ViewMode = "stack" | "bridges";

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
                            <span
                              style={{
                                fontSize: "0.8rem",
                                fontWeight: 700,
                                color: company.isGap ? "#ff6b6b" : "#fff",
                              }}
                            >
                              {company.name}
                            </span>
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
                        .map((company) => (
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
                        ))}
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
                    <span
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      {mover.name}
                    </span>
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
      </div>
    </div>
  );
}

