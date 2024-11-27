"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalPayments: 0,
    waitlistCount: 0,
  });

  useEffect(() => {
    // Fetch admin stats
    fetch("/api/admin/stats")
      .then((res) => res.json())
      .then(setStats);
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-6">
          <h3 className="font-semibold">Total Users</h3>
          <p className="text-3xl font-bold">{stats.totalUsers}</p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold">Total Payments</h3>
          <p className="text-3xl font-bold">₹{stats.totalPayments}</p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold">Waitlist</h3>
          <p className="text-3xl font-bold">{stats.waitlistCount}</p>
        </Card>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Recent Activity</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Add table rows here */}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}