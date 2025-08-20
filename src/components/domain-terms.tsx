'use client'

const ROW_1_TERMS = [
  'PLM', 'MES', 'ERP', 'SAP', 'UNS', 'OPC UA', 'MQTT', 'Polarion', 'NX', 
  'Teamcenter', 'Digital Twin', 'CAE', 'Simulation', 'Process Planning', 
  'Requirements', 'Bill of Materials', 'Quality Control', 'Asset Management'
]

const ROW_2_TERMS = [
  'Constraints', 'Compliance', 'Audit Trail', 'IoT Platform', 'Industry 4.0',
  'Predictive Maintenance', 'SCADA', 'PLC', 'HMI', 'Asset Tracking', 
  'Work Instructions', 'Change Management', 'Document Control', 'Resource Planning',
  'Production Scheduling', 'Quality Assurance', 'Workflow Automation'
]

function DomainCard({ term }: { term: string }) {
  return (
    <div className="relative px-4 py-2 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 shadow-sm hover:shadow-lg hover:border-primary/50 hover:bg-card transition-all duration-300 cursor-pointer group">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg transition-opacity duration-300" />
      <span className="relative text-sm font-medium">{term}</span>
    </div>
  )
}

function MarqueeRow({ terms, direction = 'left' }: { terms: string[], direction?: 'left' | 'right' }) {
  return (
    <div className="flex gap-4 animate-marquee" style={{ 
      animationDirection: direction === 'right' ? 'reverse' : 'normal' 
    }}>
      {[...terms, ...terms].map((term, i) => (
        <DomainCard key={`${term}-${i}`} term={term} />
      ))}
    </div>
  )
}

export function DomainTerms() {
  return (
    <div className="relative w-full overflow-hidden py-24 space-y-12 bg-gradient-to-b from-background/50 to-background">
      <div className="flex whitespace-nowrap marquee-fade">
        <MarqueeRow terms={ROW_1_TERMS} />
      </div>
      <div className="flex whitespace-nowrap marquee-fade">
        <MarqueeRow terms={ROW_2_TERMS} direction="right" />
      </div>
    </div>
  )
}
