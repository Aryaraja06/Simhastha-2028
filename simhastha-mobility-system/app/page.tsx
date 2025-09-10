"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bus, Navigation, Activity, Route, Accessibility, Monitor, Car, TrendingUp, Shield, Zap } from "lucide-react"
import DashboardOverview from "@/components/dashboard-overview"
import RouteManagement from "@/components/route-management"
import PublicTransport from "@/components/public-transport"
import AccessibilityPanel from "@/components/accessibility-panel"
import DynamicSignage from "@/components/dynamic-signage"
import VIPMovement from "@/components/vip-movement"
import Analytics from "@/components/analytics"

export default function SimhasthaSmartMobility() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
                <Navigation className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Simhastha 2028</h1>
                <p className="text-sm text-gray-600">Smart Mobility & Access Management</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                <Activity className="h-3 w-3 mr-1" />
                System Active
              </Badge>
              <Button variant="outline" size="sm">
                <Shield className="h-4 w-4 mr-2" />
                Emergency Mode
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-7 bg-white shadow-sm">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Monitor className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="routes" className="flex items-center gap-2">
              <Route className="h-4 w-4" />
              Routes
            </TabsTrigger>
            <TabsTrigger value="transport" className="flex items-center gap-2">
              <Bus className="h-4 w-4" />
              Transport
            </TabsTrigger>
            <TabsTrigger value="accessibility" className="flex items-center gap-2">
              <Accessibility className="h-4 w-4" />
              Access
            </TabsTrigger>
            <TabsTrigger value="signage" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Signage
            </TabsTrigger>
            <TabsTrigger value="vip" className="flex items-center gap-2">
              <Car className="h-4 w-4" />
              VIP
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <DashboardOverview />
          </TabsContent>

          <TabsContent value="routes">
            <RouteManagement />
          </TabsContent>

          <TabsContent value="transport">
            <PublicTransport />
          </TabsContent>

          <TabsContent value="accessibility">
            <AccessibilityPanel />
          </TabsContent>

          <TabsContent value="signage">
            <DynamicSignage />
          </TabsContent>

          <TabsContent value="vip">
            <VIPMovement />
          </TabsContent>

          <TabsContent value="analytics">
            <Analytics />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
