"use client";

import { useEffect, useState } from "react";
import {
  Settings,
  ShieldCheck,
  MessageSquare,
  Save,
  Loader2,
  Trash2,
  Check,
  X,
  LogOut,
  Eye,
  EyeOff,
  Palette,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { THEMES, buildThemeCss } from "@/lib/themes";

type SettingsT = Record<string, string> & {
  adminPassword?: string;
};

type EnquiryT = {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  subject: string | null;
  message: string;
  status: string;
  createdAt: string;
};

const TABS = [
  { id: "enquiries", label: "Enquiries", icon: MessageSquare },
  { id: "settings", label: "Settings", icon: Settings },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function AdminPanel() {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [tab, setTab] = useState<TabId>("enquiries");
  const [loading, setLoading] = useState(false);

  const [enquiries, setEnquiries] = useState<EnquiryT[]>([]);
  const [settings, setSettings] = useState<SettingsT | null>(null);

  const headers = () => ({
    "Content-Type": "application/json",
    "x-admin-password": pw,
  });

  const login = async () => {
    setLoading(true);
    try {
      // Try fetching enquiries as auth check
      const res = await fetch("/api/enquiries", { headers: headers() });
      const d = await res.json();
      if (d.ok) {
        setAuthed(true);
        setEnquiries(d.enquiries);
        toast({ title: "Welcome, Admin" });
        // also load settings
        const st = await fetch("/api/settings").then((r) => r.json());
        if (st.ok) setSettings(st.settings);
      } else {
        toast({ variant: "destructive", title: "Invalid password" });
      }
    } finally {
      setLoading(false);
    }
  };

  const refreshEnquiries = async () => {
    const d = await fetch("/api/enquiries", { headers: headers() }).then((r) =>
      r.json()
    );
    if (d.ok) setEnquiries(d.enquiries);
  };

  const setEnquiryStatus = async (id: string, status: string) => {
    await fetch(`/api/enquiries/${id}`, {
      method: "PATCH",
      headers: headers(),
      body: JSON.stringify({ status }),
    });
    setEnquiries((cur) =>
      cur.map((e) => (e.id === id ? { ...e, status } : e))
    );
    toast({ title: `Marked ${status}` });
  };

  const deleteEnquiry = async (id: string) => {
    if (!confirm("Delete this enquiry?")) return;
    await fetch(`/api/enquiries/${id}`, {
      method: "DELETE",
      headers: headers(),
    });
    setEnquiries((cur) => cur.filter((e) => e.id !== id));
  };

  const saveSettings = async () => {
    if (!settings) return;
    setLoading(true);
    try {
      const res = await fetch("/api/settings", {
        method: "PUT",
        headers: headers(),
        body: JSON.stringify({ password: pw, settings }),
      });
      const d = await res.json();
      if (d.ok) {
        toast({
          title: "Settings saved",
          description: "Reload the page to see all changes on the site.",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Save failed",
          description: d.error,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setAuthed(false);
    setPw("");
    setTab("enquiries");
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed bottom-4 right-4 z-30 size-10 rounded-full shadow-lg bg-primary text-primary-foreground hover:bg-primary/90"
        onClick={() => setOpen(true)}
        aria-label="Admin panel"
        title="Admin"
      >
        <Settings className="size-5" />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[860px] max-h-[90vh] overflow-hidden p-0 flex flex-col">
          <DialogHeader className="px-6 pt-6 pb-3 border-b">
            <DialogTitle className="flex items-center gap-2 text-xl">
              <ShieldCheck className="size-5 text-primary" /> Admin Panel
            </DialogTitle>
            <DialogDescription>
              Manage patient enquiries and site settings (theme, booking URL,
              WhatsApp, admin password).
            </DialogDescription>
          </DialogHeader>

          {!authed ? (
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="admin-pw">Admin Password</Label>
                <div className="relative">
                  <Input
                    id="admin-pw"
                    type={showPw ? "text" : "password"}
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && login()}
                    placeholder="Enter admin password"
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw((v) => !v)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPw ? (
                      <EyeOff className="size-4" />
                    ) : (
                      <Eye className="size-4" />
                    )}
                  </button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Default password is{" "}
                  <code className="font-mono">admin123</code>. Change it from
                  the Settings tab after first login.
                </p>
              </div>
              <Button
                onClick={login}
                disabled={loading || !pw}
                className="w-full"
              >
                {loading ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <ShieldCheck className="size-4" />
                )}
                Login
              </Button>
            </div>
          ) : (
            <div className="flex flex-col flex-1 min-h-0">
              <div className="flex items-center gap-1 px-4 py-2 border-b overflow-x-auto">
                {TABS.map((t) => {
                  const Icon = t.icon;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setTab(t.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${
                        tab === t.id
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-accent text-muted-foreground"
                      }`}
                    >
                      <Icon className="size-4" />
                      {t.label}
                      {t.id === "enquiries" && enquiries.length > 0 && (
                        <span className="ml-1 text-[10px] bg-background/30 px-1.5 py-0.5 rounded-full">
                          {enquiries.length}
                        </span>
                      )}
                    </button>
                  );
                })}
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-auto"
                  onClick={logout}
                >
                  <LogOut className="size-4" /> Logout
                </Button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 min-h-0 max-h-[60vh]">
                {tab === "enquiries" && (
                  <EnquiriesTab
                    enquiries={enquiries}
                    onStatus={setEnquiryStatus}
                    onDelete={deleteEnquiry}
                    onRefresh={refreshEnquiries}
                  />
                )}
                {tab === "settings" && (
                  <SettingsTab
                    settings={settings}
                    setSettings={setSettings}
                    onSave={saveSettings}
                    loading={loading}
                  />
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

/* ---------- Tabs ---------- */

function EnquiriesTab({
  enquiries,
  onStatus,
  onDelete,
  onRefresh,
}: {
  enquiries: EnquiryT[];
  onStatus: (id: string, s: string) => void;
  onDelete: (id: string) => void;
  onRefresh: () => void;
}) {
  if (enquiries.length === 0)
    return (
      <div className="flex flex-col items-center justify-center py-12 text-muted-foreground gap-2">
        <MessageSquare className="size-8" />
        <p className="text-sm">No enquiries yet.</p>
        <Button size="sm" variant="outline" onClick={onRefresh}>
          Refresh
        </Button>
      </div>
    );
  return (
    <div className="space-y-2">
      <div className="flex justify-end mb-1">
        <Button size="sm" variant="outline" onClick={onRefresh}>
          Refresh
        </Button>
      </div>
      {enquiries.map((e) => (
        <div key={e.id} className="rounded-lg border p-3 bg-card">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-semibold">{e.name}</span>
                <StatusBadge status={e.status} />
              </div>
              <div className="text-sm text-muted-foreground mt-0.5">
                {e.subject || "Appointment enquiry"}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">
                <a href={`tel:${e.phone}`} className="hover:underline">
                  {e.phone}
                </a>
                {e.email && ` · ${e.email}`}
              </div>
              <p className="text-sm mt-1">{e.message}</p>
              <div className="text-[10px] text-muted-foreground mt-1">
                {new Date(e.createdAt).toLocaleString()}
              </div>
            </div>
            <div className="flex flex-wrap gap-1 shrink-0">
              <Button
                size="sm"
                variant="outline"
                onClick={() => onStatus(e.id, "contacted")}
              >
                <Check className="size-3.5" /> Contacted
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => onStatus(e.id, "closed")}
              >
                Close
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => onStatus(e.id, "new")}
              >
                Reopen
              </Button>
              <Button size="sm" variant="ghost" onClick={() => onDelete(e.id)}>
                <Trash2 className="size-3.5 text-destructive" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function SettingsTab({
  settings,
  setSettings,
  onSave,
  loading,
}: {
  settings: SettingsT | null;
  setSettings: (s: SettingsT) => void;
  onSave: () => void;
  loading: boolean;
}) {
  if (!settings)
    return (
      <div className="flex flex-col items-center justify-center py-12 text-muted-foreground gap-2">
        <Settings className="size-8" />
        <p className="text-sm">Settings not loaded.</p>
      </div>
    );
  const upd = (k: string, v: string) => setSettings({ ...settings, [k]: v });

  const themeEntries = Object.entries(THEMES) as [
    keyof typeof THEMES,
    (typeof THEMES)[keyof typeof THEMES]
  ][];

  const fields: { key: string; label: string }[] = [
    { key: "bookingUrl", label: "Online Booking URL (empty = use in-app form)" },
    { key: "whatsapp", label: "WhatsApp Number (with country code)" },
    { key: "phone", label: "Phone (with country code)" },
    { key: "adminPassword", label: "Admin Password (min 4 chars)" },
  ];

  return (
    <div className="space-y-4">
      {/* COLOR THEME PICKER */}
      <div className="rounded-lg border bg-card p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Palette className="size-4 text-primary" />
          <div className="font-semibold text-sm">Website Base Color</div>
        </div>
        <p className="text-xs text-muted-foreground">
          Pick a color theme. Preview updates instantly — click "Save Settings"
          below to keep your choice.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {themeEntries.map(([key, t]) => {
            const active = (settings.primaryColor || "emerald") === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => {
                  upd("primaryColor", key as string);
                  const css = buildThemeCss(key);
                  let el = document.getElementById(
                    "abinash-theme-vars"
                  ) as HTMLStyleElement | null;
                  if (!el) {
                    el = document.createElement("style");
                    el.id = "abinash-theme-vars";
                    document.head.appendChild(el);
                  }
                  el.textContent = css;
                  try {
                    localStorage.setItem("abinash-theme", key);
                  } catch {
                    /* ignore */
                  }
                }}
                className={`relative flex flex-col items-center gap-1.5 rounded-lg border-2 p-3 transition-all ${
                  active
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/40"
                }`}
              >
                <span
                  className="size-7 rounded-full ring-2 ring-white dark:ring-zinc-800 shadow-sm"
                  style={{ background: t.swatch }}
                />
                <span className="text-[11px] font-medium">{t.label}</span>
                {active && (
                  <Check className="size-3.5 text-primary absolute top-1.5 right-1.5" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        {fields.map((f) => (
          <div key={f.key} className="space-y-1.5">
            <Label htmlFor={`set-${f.key}`} className="text-xs">
              {f.label}
            </Label>
            <Input
              id={`set-${f.key}`}
              value={(settings[f.key] as string) ?? ""}
              onChange={(e) => upd(f.key, e.target.value)}
            />
          </div>
        ))}
      </div>
      <Button onClick={onSave} disabled={loading} className="w-full">
        {loading ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <Save className="size-4" />
        )}
        Save Settings
      </Button>
    </div>
  );
}

/* ---------- Helpers ---------- */

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    new: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200",
    contacted:
      "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200",
    closed: "bg-zinc-100 text-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-200",
  };
  return (
    <span
      className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
        map[status] ?? ""
      }`}
    >
      {status}
    </span>
  );
}
