"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Toast from "@/components/ui/Toast";
import { Bell, UserIcon, AlertTriangle } from "lucide-react"; // Import UserIcon instead of User to avoid conflict
import { useAuth } from "@/hooks/useAuth";

const frequencies = ["Daily", "Weekly", "Biweekly", "Monthly"];

export default function SettingsPage() {
    const { user } = useAuth();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [frequency, setFrequency] = useState("Weekly");
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        if (user) {
            setEmail(user.email || "");
            setName(user.displayName || localStorage.getItem("user_name") || "User");
        }
    }, [user]);

    const handleSave = () => {
        setShowToast(true);
    };

    return (
        <div className="min-h-screen bg-[#F7F5F0]">
            <Navbar />
            <main className="pt-24 pb-16 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="max-w-2xl mx-auto"
                >

                    <div className="mb-8">
                        <p className="text-xs font-medium text-[#8C8578] uppercase tracking-widest mb-1">Account</p>
                        <h1 className="text-3xl text-[#1A1814] mb-1" style={{ fontFamily: "var(--font-display)" }}>
                            Settings
                        </h1>
                        <p className="text-sm text-[#8C8578]">Manage your profile and alert preferences</p>
                    </div>

                    {/* Profile */}
                    <div className="bg-white rounded-2xl border border-[#E5E0D8] p-6 mb-4 card-hover">
                        <div className="flex items-center gap-2 mb-5">
                            <div className="w-7 h-7 rounded-lg bg-[#1B3A6B]/10 flex items-center justify-center">
                                <UserIcon size={14} className="text-[#1B3A6B]" />
                            </div>
                            <h2 className="text-sm font-semibold text-[#1A1814]">Profile</h2>
                        </div>
                        <div className="space-y-4">
                            <Input label="Full Name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
                            <Input label="Email Address" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                        </div>
                    </div>

                    {/* Alert Frequency */}
                    <div className="bg-white rounded-2xl border border-[#E5E0D8] p-6 mb-4 card-hover">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-7 h-7 rounded-lg bg-[#C4956A]/10 flex items-center justify-center">
                                <Bell size={14} className="text-[#C4956A]" />
                            </div>
                            <h2 className="text-sm font-semibold text-[#1A1814]">Alert Frequency</h2>
                        </div>
                        <p className="text-xs text-[#8C8578] mb-5 ml-9">
                            Choose how often you want to receive analytics reports by email.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {frequencies.map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setFrequency(f)}
                                    className={`py-2.5 px-4 rounded-xl text-sm font-medium border transition-all duration-300 cursor-pointer ${frequency === f
                                        ? "bg-[#1B3A6B] text-white border-[#1B3A6B] shadow-md shadow-[#1B3A6B]/15"
                                        : "bg-white text-[#8C8578] border-[#E5E0D8] hover:border-[#C4956A] hover:text-[#1A1814]"
                                        }`}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                        <div className="mt-4 p-3 rounded-xl bg-[#F7F5F0] border border-[#E5E0D8]">
                            <p className="text-xs text-[#8C8578]">
                                📬 With <span className="font-semibold text-[#C4956A]">{frequency}</span> alerts,
                                your next report will be sent to{" "}
                                <span className="font-semibold text-[#1A1814]">{email}</span>
                            </p>
                        </div>
                    </div>

                    {/* Save */}
                    <div className="flex items-center gap-3 mb-6">
                        <Button onClick={handleSave} size="md" className="min-w-[140px]">
                            Save Changes
                        </Button>
                    </div>

                    {/* Danger Zone */}
                    <div className="bg-white rounded-2xl border border-red-200 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center">
                                <AlertTriangle size={14} className="text-red-500" />
                            </div>
                            <h2 className="text-sm font-semibold text-red-700">Danger Zone</h2>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 rounded-xl border border-red-100 bg-red-50/30">
                                <div>
                                    <p className="text-sm font-medium text-[#1A1814]">Disconnect Google Analytics</p>
                                    <p className="text-xs text-[#8C8578]">Remove your GA connection and stop syncing data</p>
                                </div>
                                <button className="px-3 py-1.5 text-xs font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors cursor-pointer">
                                    Disconnect
                                </button>
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-xl border border-red-100 bg-red-50/30">
                                <div>
                                    <p className="text-sm font-medium text-[#1A1814]">Delete Account</p>
                                    <p className="text-xs text-[#8C8578]">Permanently delete your account and all data</p>
                                </div>
                                <button className="px-3 py-1.5 text-xs font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors cursor-pointer">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </main>

            {/* Toast Notification */}
            {showToast && (
                <Toast
                    message="Settings updated successfully"
                    variant="success"
                    onClose={() => setShowToast(false)}
                />
            )}
        </div>
    );
}