import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen, Terminal, Container, Copy, Check, ChevronRight,
  Cpu, Server, HardDrive, Network, Activity, Radio,
  Code2, FileText, Webhook, Shield, ExternalLink,
} from "lucide-react";

const GITHUB_REPO = "https://github.com/bshah1914/cloudsecoptoolv4";

type DocTab = "agent" | "api" | "guides";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-gray-500 hover:text-gray-300"
      title="Copy to clipboard"
    >
      {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  );
}

const agentInstallCmd = `curl -sSL https://raw.githubusercontent.com/bshah1914/cloudsecoptoolv4/master/agent/install.sh | \\
  bash -s -- --api-key YOUR_AGENT_KEY --api-url https://your-server.com/api/v1`;

const dockerAgentCmd = `docker run -d \\
  --name cloudlunar-agent \\
  --restart always --pid host \\
  -e CLOUDLUNAR_API_URL=http://your-server:8000/api/v1 \\
  -e CLOUDLUNAR_API_KEY=YOUR_KEY \\
  -e CLOUDLUNAR_INTERVAL=60 \\
  -v /proc:/host/proc:ro \\
  -v /var/run/docker.sock:/var/run/docker.sock:ro \\
  cloudlunar-agent`;

const manualAgentCmd = `git clone https://github.com/bshah1914/cloudsecoptoolv4.git
cd cloudsecoptoolv4/agent
pip install -r requirements.txt
python cloudlunar_agent.py \\
  --api-url http://localhost:8000/api/v1 \\
  --api-key YOUR_AGENT_KEY \\
  --interval 60`;

const apiEndpoints = [
  { method: "POST", path: "/api/v1/agent/register", desc: "Register a new agent" },
  { method: "POST", path: "/api/v1/agent/metrics", desc: "Push collected metrics" },
  { method: "POST", path: "/api/v1/agent/discovery", desc: "Push AWS discovery results" },
  { method: "POST", path: "/api/v1/agent/heartbeat", desc: "Agent heartbeat" },
  { method: "GET", path: "/api/v1/agent/list", desc: "List all registered agents" },
  { method: "GET", path: "/api/v1/agent/{host_id}/metrics", desc: "Get historical metrics" },
  { method: "WS", path: "/api/v1/agent/ws/{host_id}", desc: "WebSocket real-time stream" },
];

const configOptions = [
  { flag: "--api-url", env: "CLOUDLUNAR_API_URL", default: "http://localhost:8000/api/v1", desc: "Backend API URL" },
  { flag: "--api-key", env: "CLOUDLUNAR_API_KEY", default: "(required)", desc: "Agent authentication key" },
  { flag: "--interval", env: "CLOUDLUNAR_INTERVAL", default: "60", desc: "Seconds between collections" },
  { flag: "--enable-aws", env: "CLOUDLUNAR_ENABLE_AWS", default: "false", desc: "Enable AWS resource discovery" },
  { flag: "--debug", env: "—", default: "false", desc: "Verbose debug logging" },
];

export default function Documentation() {
  const [activeTab, setActiveTab] = useState<DocTab>("agent");

  return (
    <section id="docs" className="relative py-28 md:py-36 bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-transparent to-[#030014] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Documentation</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6">
            Setup Guides &<br />
            <span className="text-gradient-amber">API Reference</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Everything you need to install the monitoring agent, integrate with the API, and get the most out of CloudLunar.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-3 mb-8 max-w-3xl mx-auto"
        >
          {([
            { id: "agent" as DocTab, label: "Agent Installation", icon: Radio, desc: "Real-time monitoring setup" },
            { id: "api" as DocTab, label: "API Reference", icon: Code2, desc: "Endpoints & WebSocket" },
            { id: "guides" as DocTab, label: "Guides & Resources", icon: BookOpen, desc: "Configuration & security" },
          ]).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-5 py-3.5 rounded-xl text-left transition-all flex-1 ${
                activeTab === tab.id
                  ? "bg-amber-500/15 border border-amber-500/30 text-white"
                  : "bg-white/[0.03] border border-white/5 text-gray-400 hover:bg-white/[0.06] hover:text-gray-300"
              }`}
            >
              <tab.icon className={`w-5 h-5 flex-shrink-0 ${activeTab === tab.id ? "text-amber-400" : "text-gray-500"}`} />
              <div>
                <p className="text-sm font-medium">{tab.label}</p>
                <p className="text-[11px] text-gray-500">{tab.desc}</p>
              </div>
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 md:p-8"
        >
          {/* Agent Installation Tab */}
          {activeTab === "agent" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              <div className="flex items-center gap-2 mb-2">
                <Radio className="w-5 h-5 text-teal-400" />
                <h3 className="text-lg font-semibold text-white">CloudLunar Agent — Real-Time Monitoring</h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">$0 Cost</span>
              </div>
              <p className="text-sm text-gray-400 mb-8">
                A lightweight Python process that collects system metrics via <code className="text-teal-300 bg-teal-500/10 px-1.5 py-0.5 rounded text-[11px]">psutil</code> (reads <code className="text-teal-300 bg-teal-500/10 px-1.5 py-0.5 rounded text-[11px]">/proc</code>) and pushes them to your CloudLunar dashboard every 60 seconds. <strong className="text-white">Zero CloudWatch costs.</strong>
              </p>

              {/* Install Options */}
              <div className="space-y-6 mb-8">
                {/* Option 1: One-Line */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Terminal className="w-4 h-4 text-emerald-400" />
                    <h4 className="text-sm font-semibold text-white">Option 1: One-Line Install (Linux, systemd)</h4>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">Recommended</span>
                  </div>
                  <div className="bg-[#0a0a1a] rounded-xl border border-white/5 overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2 border-b border-white/5">
                      <span className="text-[11px] text-gray-500">bash</span>
                      <CopyButton text={agentInstallCmd} />
                    </div>
                    <div className="px-4 py-3">
                      <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap">$ {agentInstallCmd}</pre>
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-2 ml-1">Installs psutil + requests, downloads agent to <code className="text-gray-400">/opt/cloudlunar-agent/</code>, creates systemd service with auto-restart.</p>
                </div>

                {/* Option 2: Docker */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Container className="w-4 h-4 text-blue-400" />
                    <h4 className="text-sm font-semibold text-white">Option 2: Docker</h4>
                  </div>
                  <div className="bg-[#0a0a1a] rounded-xl border border-white/5 overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2 border-b border-white/5">
                      <span className="text-[11px] text-gray-500">docker</span>
                      <CopyButton text={dockerAgentCmd} />
                    </div>
                    <div className="px-4 py-3">
                      <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap">$ {dockerAgentCmd}</pre>
                    </div>
                  </div>
                </div>

                {/* Option 3: Manual */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Code2 className="w-4 h-4 text-amber-400" />
                    <h4 className="text-sm font-semibold text-white">Option 3: Manual Install</h4>
                  </div>
                  <div className="bg-[#0a0a1a] rounded-xl border border-white/5 overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2 border-b border-white/5">
                      <span className="text-[11px] text-gray-500">bash</span>
                      <CopyButton text={manualAgentCmd} />
                    </div>
                    <div className="px-4 py-3">
                      <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap">$ {manualAgentCmd}</pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* What it collects */}
              <h4 className="text-sm font-semibold text-white mb-4">Metrics Collected Every 60 Seconds</h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                {[
                  { icon: Cpu, label: "CPU", desc: "Overall %, per-core, user/system/iowait, load averages (1m, 5m, 15m)", color: "text-indigo-400" },
                  { icon: Server, label: "Memory", desc: "Total, used, available RAM (GB), usage %, swap usage", color: "text-purple-400" },
                  { icon: HardDrive, label: "Disk", desc: "Per-partition total/used/free, I/O read/write bytes & count", color: "text-blue-400" },
                  { icon: Network, label: "Network", desc: "Bytes & packets sent/recv, error counts, active connections, listening ports", color: "text-cyan-400" },
                  { icon: Activity, label: "Processes", desc: "Total count, top 10 by CPU usage, top 10 by memory usage", color: "text-amber-400" },
                  { icon: Container, label: "Docker", desc: "Container ID/name/image/status, CPU %, memory usage/limit per container", color: "text-green-400" },
                ].map((item) => (
                  <div key={item.label} className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                    <div className="flex items-center gap-2.5 mb-2">
                      <item.icon className={`w-4 h-4 ${item.color}`} />
                      <h5 className="text-xs font-semibold text-white">{item.label}</h5>
                    </div>
                    <p className="text-[11px] text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* How It Works */}
              <div className="bg-gradient-to-br from-teal-600/10 to-cyan-600/10 border border-teal-500/15 rounded-xl p-6 mb-6">
                <h4 className="text-sm font-bold text-white mb-4">Architecture</h4>
                <div className="flex flex-col sm:flex-row items-center gap-4 text-center">
                  {[
                    { step: "1", label: "Install Agent", desc: "psutil + Python on your server" },
                    { step: "2", label: "Collect Metrics", desc: "Reads /proc every 60 seconds" },
                    { step: "3", label: "Push to Backend", desc: "HTTP POST with API key auth" },
                    { step: "4", label: "Live Dashboard", desc: "WebSocket real-time streaming" },
                  ].map((s, i) => (
                    <React.Fragment key={s.step}>
                      <div className="flex-1">
                        <div className="w-9 h-9 rounded-full bg-teal-500/20 text-teal-400 text-xs font-bold flex items-center justify-center mx-auto mb-2">{s.step}</div>
                        <p className="text-xs font-semibold text-white">{s.label}</p>
                        <p className="text-[10px] text-gray-500 mt-0.5">{s.desc}</p>
                      </div>
                      {i < 3 && <ChevronRight className="w-4 h-4 text-teal-600 hidden sm:block flex-shrink-0" />}
                    </React.Fragment>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-5 justify-center">
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">EC2 Instances</span>
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">ECS Containers</span>
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">Kubernetes Pods</span>
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">Any Linux / macOS</span>
                </div>
              </div>

              {/* Cost Breakdown */}
              <div className="bg-emerald-500/5 rounded-xl p-5 border border-emerald-500/10">
                <h4 className="text-sm font-semibold text-emerald-400 mb-3">Why It's Free (No AWS Costs)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-white/5">
                        <th className="pb-2 pr-4">Data Source</th>
                        <th className="pb-2 pr-4">Method</th>
                        <th className="pb-2">AWS Cost</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-400">
                      <tr className="border-b border-white/5">
                        <td className="py-2 pr-4">CPU, Memory, Disk, Network</td>
                        <td className="py-2 pr-4"><code className="text-teal-300">psutil</code> (reads /proc)</td>
                        <td className="py-2 text-emerald-400 font-bold">$0</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-2 pr-4">Process list</td>
                        <td className="py-2 pr-4"><code className="text-teal-300">psutil.process_iter()</code></td>
                        <td className="py-2 text-emerald-400 font-bold">$0</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-2 pr-4">Docker containers</td>
                        <td className="py-2 pr-4">Docker SDK</td>
                        <td className="py-2 text-emerald-400 font-bold">$0</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-2 pr-4">AWS resource counts</td>
                        <td className="py-2 pr-4"><code className="text-teal-300">describe_*</code>, <code className="text-teal-300">list_*</code></td>
                        <td className="py-2 text-emerald-400 font-bold">$0</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4">CloudWatch metrics</td>
                        <td className="py-2 pr-4 text-gray-600">NOT USED</td>
                        <td className="py-2 text-emerald-400 font-bold">$0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* API Reference Tab */}
          {activeTab === "api" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              <div className="flex items-center gap-2 mb-2">
                <Code2 className="w-5 h-5 text-indigo-400" />
                <h3 className="text-lg font-semibold text-white">Agent API Endpoints</h3>
              </div>
              <p className="text-sm text-gray-400 mb-6">
                All agent API endpoints are authenticated via API key sent in the <code className="text-indigo-300 bg-indigo-500/10 px-1.5 py-0.5 rounded text-[11px]">X-API-Key</code> header.
              </p>

              {/* Endpoints Table */}
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-500 border-b border-white/10">
                      <th className="pb-3 pr-4 text-xs font-medium">Method</th>
                      <th className="pb-3 pr-4 text-xs font-medium">Endpoint</th>
                      <th className="pb-3 text-xs font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {apiEndpoints.map((ep) => (
                      <tr key={ep.path} className="border-b border-white/5">
                        <td className="py-3 pr-4">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            ep.method === "POST" ? "bg-green-500/10 text-green-400" :
                            ep.method === "GET" ? "bg-blue-500/10 text-blue-400" :
                            "bg-purple-500/10 text-purple-400"
                          }`}>
                            {ep.method}
                          </span>
                        </td>
                        <td className="py-3 pr-4">
                          <code className="text-xs text-gray-300 font-mono">{ep.path}</code>
                        </td>
                        <td className="py-3 text-xs text-gray-400">{ep.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* WebSocket Example */}
              <h4 className="text-sm font-semibold text-white mb-3">WebSocket Real-Time Streaming</h4>
              <div className="bg-[#0a0a1a] rounded-xl border border-white/5 overflow-hidden mb-8">
                <div className="flex items-center justify-between px-4 py-2 border-b border-white/5">
                  <span className="text-[11px] text-gray-500">javascript</span>
                  <CopyButton text={`const ws = new WebSocket('ws://localhost:8000/api/v1/agent/ws/HOST_ID');
ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log(data.cpu_percent, data.memory_percent);
};`} />
                </div>
                <div className="px-4 py-3">
                  <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap">{`// Connect to a specific host
const ws = new WebSocket('ws://localhost:8000/api/v1/agent/ws/HOST_ID');

// Or connect to all agents (overview dashboard)
const ws = new WebSocket('ws://localhost:8000/api/v1/agent/ws/all');

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  // data = {
  //   type: "metrics",
  //   host_id: "abc123",
  //   hostname: "web-server-1",
  //   cpu_percent: 45.2,
  //   memory_percent: 68.1,
  //   load_avg_1m: 2.3,
  //   active_connections: 150,
  //   ...
  // }
  updateDashboard(data);
};`}</pre>
                </div>
              </div>

              {/* Configuration Table */}
              <h4 className="text-sm font-semibold text-white mb-3">Agent Configuration</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-500 border-b border-white/10">
                      <th className="pb-3 pr-3 text-xs font-medium">Flag</th>
                      <th className="pb-3 pr-3 text-xs font-medium">Env Variable</th>
                      <th className="pb-3 pr-3 text-xs font-medium">Default</th>
                      <th className="pb-3 text-xs font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {configOptions.map((opt) => (
                      <tr key={opt.flag} className="border-b border-white/5">
                        <td className="py-2.5 pr-3"><code className="text-xs text-amber-300 font-mono">{opt.flag}</code></td>
                        <td className="py-2.5 pr-3"><code className="text-xs text-gray-400 font-mono">{opt.env}</code></td>
                        <td className="py-2.5 pr-3 text-xs text-gray-500">{opt.default}</td>
                        <td className="py-2.5 text-xs text-gray-400">{opt.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* Guides & Resources Tab */}
          {activeTab === "guides" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-semibold text-white">Guides & Resources</h3>
              </div>
              <p className="text-sm text-gray-400 mb-8">
                Detailed guides for configuring, securing, and managing your CloudLunar deployment.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    icon: Shield, title: "Security & Authentication", color: "text-green-400", bg: "from-green-600/10 to-emerald-600/10", border: "border-green-500/15",
                    items: [
                      "Agent API keys are hashed (SHA-256) before storage",
                      "HTTPS recommended for production deployments",
                      "Agent runs with minimal privileges (read-only /proc)",
                      "Systemd: ProtectSystem=strict, NoNewPrivileges=true",
                      "AWS discovery uses IAM role — no keys stored on agent",
                    ],
                  },
                  {
                    icon: Terminal, title: "Systemd Management", color: "text-indigo-400", bg: "from-indigo-600/10 to-blue-600/10", border: "border-indigo-500/15",
                    items: [
                      "sudo systemctl status cloudlunar-agent",
                      "journalctl -u cloudlunar-agent -f",
                      "sudo systemctl restart cloudlunar-agent",
                      "sudo systemctl stop cloudlunar-agent",
                      "sudo systemctl disable --now cloudlunar-agent",
                    ],
                  },
                  {
                    icon: Cpu, title: "Agent Resource Usage", color: "text-purple-400", bg: "from-purple-600/10 to-pink-600/10", border: "border-purple-500/15",
                    items: [
                      "CPU: < 1% (mostly sleeping between collections)",
                      "Memory: ~25-40 MB RSS",
                      "Network: ~2-5 KB per metric push (JSON payload)",
                      "Disk: Zero (no local storage)",
                      "Runs on: EC2, ECS, K8s, any Linux/macOS box",
                    ],
                  },
                  {
                    icon: Webhook, title: "Agent Lifecycle", color: "text-cyan-400", bg: "from-cyan-600/10 to-teal-600/10", border: "border-cyan-500/15",
                    items: [
                      "1. INSTALL — pip install psutil requests",
                      "2. REGISTER — Agent sends host info to /register",
                      "3. COLLECT — psutil reads CPU/mem/disk/net every 60s",
                      "4. PUSH — HTTP POST to /agent/metrics",
                      "5. HEARTBEAT — Every 5 cycles, confirms alive",
                    ],
                  },
                ].map((guide) => (
                  <div key={guide.title} className={`bg-gradient-to-br ${guide.bg} border ${guide.border} rounded-xl p-5`}>
                    <div className="flex items-center gap-2 mb-3">
                      <guide.icon className={`w-4 h-4 ${guide.color}`} />
                      <h4 className="text-sm font-semibold text-white">{guide.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {guide.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-[11px] text-gray-400">
                          <ChevronRight className="w-3 h-3 text-gray-600 mt-0.5 flex-shrink-0" />
                          <span className={guide.title === "Systemd Management" ? "font-mono text-gray-300" : ""}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* AWS Discovery */}
              <div className="bg-white/[0.03] rounded-xl p-5 border border-white/5 mb-6">
                <h4 className="text-sm font-semibold text-white mb-3">AWS Resource Discovery (Optional, Free)</h4>
                <p className="text-[11px] text-gray-400 mb-3">Enable with <code className="text-amber-300 bg-amber-500/10 px-1.5 py-0.5 rounded">--enable-aws</code>. Runs every 5 minutes using free AWS API calls.</p>
                <div className="flex flex-wrap gap-2">
                  {["EC2 Instances", "S3 Buckets", "RDS Databases", "Lambda Functions", "DynamoDB Tables", "ECS Clusters", "ElastiCache"].map((svc) => (
                    <span key={svc} className="text-[10px] px-2.5 py-1 rounded-lg bg-white/5 text-gray-400 border border-white/5">{svc}</span>
                  ))}
                </div>
              </div>

              {/* External Links */}
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href={`${GITHUB_REPO}/blob/master/AGENT_GUIDE.md`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card-hover p-5 flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-amber-400 group-hover:text-amber-300 transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">Full Agent Guide</p>
                    <p className="text-[11px] text-gray-500">AGENT_GUIDE.md on GitHub</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-600 ml-auto" />
                </a>
                <a
                  href={`${GITHUB_REPO}#readme`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card-hover p-5 flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gray-500/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white group-hover:text-gray-300 transition-colors">Project README</p>
                    <p className="text-[11px] text-gray-500">Full setup & configuration docs</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-600 ml-auto" />
                </a>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
