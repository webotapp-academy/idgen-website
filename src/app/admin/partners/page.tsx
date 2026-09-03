"use client";

import React, { useState, useEffect } from "react";
import { Users, Search, Trash2, Mail, Phone, MapPin, Building, Calendar, X } from "lucide-react";

interface PartnerRecord {
  id: string;
  type: "quote" | "partner";
  name: string;
  organization?: string;
  email: string;
  phone?: string;
  city?: string;
  message?: string;
  status: "new" | "in_review" | "contacted" | "closed";
  createdAt: string;
}

export default function AdminPartnersPage() {
  const [partners, setPartners] = useState<PartnerRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedPartner, setSelectedPartner] = useState<PartnerRecord | null>(null);

  useEffect(() => {
    fetchPartners();
  }, []);

  async function fetchPartners() {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/leads?type=partner");
      const data = await res.json();
      if (data.success) {
        setPartners(data.leads);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id: string, status: string) {
    try {
      const res = await fetch("/api/admin/leads", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      const data = await res.json();
      if (data.success) {
        fetchPartners();
      }
    } catch (e) {
      console.error(e);
    }
  }

  async function deletePartner(id: string) {
    if (!confirm("Are you sure you want to delete this partner inquiry?")) return;
    try {
      const res = await fetch(`/api/admin/leads?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        fetchPartners();
        if (selectedPartner?.id === id) setSelectedPartner(null);
      }
    } catch (e) {
      console.error(e);
    }
  }

  const filtered = partners.filter((p) => {
    return (
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      (p.organization || "").toLowerCase().includes(search.toLowerCase()) ||
      (p.city || "").toLowerCase().includes(search.toLowerCase()) ||
      p.email.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Partner & Channel Inquiries</h1>
        <p className="text-xs text-slate-400 mt-1">
          Connect with regional distributors, school photographers, and retail offset printers across Northeast India.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search partners by business, name or city..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-950/80 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
          />
        </div>
      </div>

      <div className="rounded-3xl bg-slate-900/80 border border-slate-800 overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-xs text-slate-500">Loading inquiries...</div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center text-xs text-slate-400">No partner inquiries found.</div>
        ) : (
          <div className="divide-y divide-slate-800/80">
            {filtered.map((partner) => (
              <div
                key={partner.id}
                onClick={() => setSelectedPartner(partner)}
                className="p-4 sm:p-5 hover:bg-slate-800/40 transition cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-sm text-white">{partner.name}</span>
                    {partner.organization && (
                      <span className="text-xs text-teal-400 font-semibold flex items-center gap-1">
                        <Building className="h-3 w-3" />
                        <span>{partner.organization}</span>
                      </span>
                    )}
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                      {partner.status.toUpperCase()}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Mail className="h-3 w-3 text-slate-500" />
                      <span>{partner.email}</span>
                    </span>
                    {partner.phone && (
                      <span className="flex items-center gap-1">
                        <Phone className="h-3 w-3 text-slate-500" />
                        <span>{partner.phone}</span>
                      </span>
                    )}
                    {partner.city && (
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-slate-500" />
                        <span>{partner.city}</span>
                      </span>
                    )}
                  </div>

                  {partner.message && (
                    <p className="text-xs text-slate-300 line-clamp-1 bg-slate-950/60 p-2 rounded-lg border border-slate-800/60">
                      &ldquo;{partner.message}&rdquo;
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-3 shrink-0" onClick={(e) => e.stopPropagation()}>
                  <select
                    value={partner.status}
                    onChange={(e) => updateStatus(partner.id, e.target.value)}
                    className="px-2.5 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200"
                  >
                    <option value="new">New</option>
                    <option value="in_review">In Review</option>
                    <option value="contacted">Contacted</option>
                    <option value="closed">Closed</option>
                  </select>

                  <button
                    onClick={() => deletePartner(partner.id)}
                    className="p-1.5 text-slate-400 hover:text-rose-400 rounded-lg"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedPartner && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-xl rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-lg font-bold text-white">{selectedPartner.name}</h3>
                <p className="text-xs text-teal-400 font-semibold">{selectedPartner.organization}</p>
              </div>
              <button onClick={() => setSelectedPartner(null)} className="text-slate-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3 p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <div>
                  <span className="text-slate-500">Email:</span>
                  <p className="font-semibold text-slate-200 mt-0.5">{selectedPartner.email}</p>
                </div>
                <div>
                  <span className="text-slate-500">Phone:</span>
                  <p className="font-semibold text-slate-200 mt-0.5">{selectedPartner.phone || "N/A"}</p>
                </div>
                <div>
                  <span className="text-slate-500">City / District:</span>
                  <p className="font-semibold text-slate-200 mt-0.5">{selectedPartner.city || "N/A"}</p>
                </div>
              </div>

              <div>
                <span className="text-slate-400 font-semibold">Partner Inquiry Details:</span>
                <p className="mt-1 p-4 bg-slate-950 rounded-2xl border border-slate-800 text-slate-200 leading-relaxed">
                  {selectedPartner.message || "No message provided."}
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setSelectedPartner(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
              >
                Close
              </button>
              <a
                href={`mailto:${selectedPartner.email}?subject=IDGen%20Partnership%20Discussion`}
                className="px-5 py-2 rounded-xl bg-teal-500 text-slate-950 text-xs font-bold hover:bg-teal-400"
              >
                Reply by Email
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
