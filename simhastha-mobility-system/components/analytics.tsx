"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Line, LineChart, Pie, PieChart, Cell, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { TrendingUp, Users, BarChart3, PieChartIcon, Download, Calendar, Activity } from "lucide-react"

export default function Analytics() {
  const crowdData = [
    { time: "06:00", triveni: 15000, dashashwamedh: 8000, manikarnika: 5000, assi: 3000 },
    { time: "08:00", triveni: 25000, dashashwamedh: 12000, manikarnika: 8000, assi: 5000 },
    { time: "10:00", triveni: 35000, dashashwamedh: 18000, manikarnika: 12000, assi: 8000 },
    { time: "12:00", triveni: 45000, dashashwamedh: 25000, manikarnika: 15000, assi: 12000 },
    { time: "14:00", triveni: 42000, dashashwamedh: 22000, manikarnika: 13000, assi: 10000 },
    { time: "16:00", triveni: 38000, dashashwamedh: 20000, manikarnika: 11000, assi: 9000 },
    { time: "18:00", triveni: 32000, dashashwamedh: 16000, manikarnika: 9000, assi: 7000 },
  ]

  const transportData = [
    { mode: "Bus", usage: 45, color: "#3b82f6" },
    { mode: "Shuttle", usage: 25, color: "#10b981" },
    { mode: "Private", usage: 20, color: "#f59e0b" },
    { mode: "Walking", usage: 10, color: "#ef4444" },
  ]

  const routeEfficiency = [
    { route: "Route A", efficiency: 85, time: "35 min", load: "High" },
    { route: "Route B", efficiency: 92, time: "28 min", load: "Medium" },
    { route: "Route C", efficiency: 78, time: "42 min", load: "High" },
    { route: "Route D", efficiency: 88, time: "31 min", load: "Low" },
  ]

  const accessibilityMetrics = [
    { metric: "Wheelchair Access Usage", value: "1,247", change: "+15%" },
    { metric: "Audio Navigation Requests", value: "342", change: "+8%" },
    { metric: "Elderly Assistance", value: "2,156", change: "+12%" },
    { metric: "Medical Support Calls", value: "89", change: "-5%" },
  ]

  return (
    <div className="space-y-6">
      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Pilgrims</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">2.4M</div>
            <p className="text-xs text-green-600">+12% from yesterday</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Peak Hour Load</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">97K</div>
            <p className="text-xs text-blue-600">12:00 PM Peak</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Transport Efficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">86%</div>
            <p className="text-xs text-purple-600">Above Target</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">System Uptime</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">99.2%</div>
            <p className="text-xs text-orange-600">Excellent</p>
          </CardContent>
        </Card>
      </div>

      {/* Report Generation */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-blue-600" />
            Analytics & Reporting Dashboard
          </CardTitle>
          <CardDescription>Generate comprehensive reports and insights</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="text-sm font-medium mb-2 block">Report Type</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="crowd">Crowd Analytics</SelectItem>
                  <SelectItem value="transport">Transport Performance</SelectItem>
                  <SelectItem value="accessibility">Accessibility Metrics</SelectItem>
                  <SelectItem value="system">System Performance</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Time Period</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Format</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">PDF Report</SelectItem>
                  <SelectItem value="excel">Excel Spreadsheet</SelectItem>
                  <SelectItem value="dashboard">Live Dashboard</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Generate Report
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Crowd Analytics Chart */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-green-600" />
            Real-time Crowd Analytics
          </CardTitle>
          <CardDescription>Hourly crowd distribution across major ghats</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              triveni: { label: "Triveni Sangam", color: "#3b82f6" },
              dashashwamedh: { label: "Dashashwamedh", color: "#10b981" },
              manikarnika: { label: "Manikarnika", color: "#f59e0b" },
              assi: { label: "Assi Ghat", color: "#ef4444" },
            }}
            className="h-[300px]"
          >
            <LineChart data={crowdData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line type="monotone" dataKey="triveni" stroke="var(--color-triveni)" strokeWidth={2} />
              <Line type="monotone" dataKey="dashashwamedh" stroke="var(--color-dashashwamedh)" strokeWidth={2} />
              <Line type="monotone" dataKey="manikarnika" stroke="var(--color-manikarnika)" strokeWidth={2} />
              <Line type="monotone" dataKey="assi" stroke="var(--color-assi)" strokeWidth={2} />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Transport Mode Distribution */}
        <Card className="bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChartIcon className="h-5 w-5 text-purple-600" />
              Transport Mode Usage
            </CardTitle>
            <CardDescription>Distribution of transport preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                usage: { label: "Usage %" },
              }}
              className="h-[250px]"
            >
              <PieChart>
                <Pie
                  data={transportData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="usage"
                  label={({ mode, usage }) => `${mode}: ${usage}%`}
                >
                  {transportData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Route Efficiency */}
        <Card className="bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-orange-600" />
              Route Performance
            </CardTitle>
            <CardDescription>Efficiency metrics for active routes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {routeEfficiency.map((route, index) => (
                <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <span className="font-medium">{route.route}</span>
                    <div className="text-sm text-gray-600">
                      {route.time} • Load: {route.load}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold">{route.efficiency}%</div>
                    <Badge variant={route.efficiency > 85 ? "default" : "secondary"}>
                      {route.efficiency > 85 ? "Excellent" : "Good"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Accessibility Metrics */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-red-600" />
            Accessibility & Inclusion Metrics
          </CardTitle>
          <CardDescription>Usage statistics for accessibility services</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {accessibilityMetrics.map((metric, index) => (
              <div key={index} className="border rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                <div className="text-sm text-gray-600 mb-2">{metric.metric}</div>
                <Badge variant={metric.change.startsWith("+") ? "default" : "secondary"}>{metric.change}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle>Analytics Actions</CardTitle>
          <CardDescription>Quick access to analytics tools and reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
              <Download className="h-5 w-5" />
              Export Data
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
              <Calendar className="h-5 w-5" />
              Schedule Report
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
              <BarChart3 className="h-5 w-5" />
              Custom Dashboard
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
              <TrendingUp className="h-5 w-5" />
              Predictive Analysis
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
