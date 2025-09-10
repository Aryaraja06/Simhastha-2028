import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Route, MapPin, Navigation, Clock, Users, AlertCircle, CheckCircle, RefreshCw, Zap } from "lucide-react"

export default function RouteManagement() {
  const routes = [
    {
      id: "R001",
      name: "Main Pilgrim Route A",
      from: "Railway Station",
      to: "Triveni Sangam",
      distance: "12.5 km",
      estimatedTime: "35 min",
      currentLoad: 85,
      status: "Active",
      alternatives: 3,
    },
    {
      id: "R002",
      name: "Ghat Access Route B",
      from: "Bus Terminal",
      to: "Dashashwamedh Ghat",
      distance: "8.2 km",
      estimatedTime: "22 min",
      currentLoad: 62,
      status: "Active",
      alternatives: 2,
    },
    {
      id: "R003",
      name: "VIP Corridor",
      from: "Airport",
      to: "VIP Ghat",
      distance: "15.8 km",
      estimatedTime: "28 min",
      currentLoad: 25,
      status: "Reserved",
      alternatives: 1,
    },
    {
      id: "R004",
      name: "Emergency Route",
      from: "Hospital",
      to: "All Ghats",
      distance: "Variable",
      estimatedTime: "15-45 min",
      currentLoad: 0,
      status: "Standby",
      alternatives: 5,
    },
  ]

  const alternativeRoutes = [
    { name: "Bypass Route 1", savings: "12 min", capacity: "Available" },
    { name: "Riverside Path", savings: "8 min", capacity: "Limited" },
    { name: "Heritage Circuit", savings: "15 min", capacity: "Available" },
  ]

  return (
    <div className="space-y-6">
      {/* Route Planning Controls */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Navigation className="h-5 w-5 text-blue-600" />
            Smart Route Planning & Optimization
          </CardTitle>
          <CardDescription>AI-powered route management for efficient pilgrim movement</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="text-sm font-medium mb-2 block">Origin Point</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select origin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="railway">Railway Station</SelectItem>
                  <SelectItem value="bus">Bus Terminal</SelectItem>
                  <SelectItem value="airport">Airport</SelectItem>
                  <SelectItem value="parking">Parking Areas</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Destination</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select ghat" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="triveni">Triveni Sangam</SelectItem>
                  <SelectItem value="dashashwamedh">Dashashwamedh</SelectItem>
                  <SelectItem value="manikarnika">Manikarnika</SelectItem>
                  <SelectItem value="assi">Assi Ghat</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Priority Level</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Set priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="high">High Priority</SelectItem>
                  <SelectItem value="vip">VIP</SelectItem>
                  <SelectItem value="emergency">Emergency</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button className="w-full">
                <Route className="h-4 w-4 mr-2" />
                Generate Route
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Active Routes */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-green-600" />
            Active Route Status
          </CardTitle>
          <CardDescription>Real-time monitoring of all active routes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {routes.map((route, index) => (
              <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-lg">{route.name}</h3>
                    <p className="text-sm text-gray-600">
                      {route.from} → {route.to}
                    </p>
                  </div>
                  <Badge
                    variant={
                      route.status === "Active" ? "default" : route.status === "Reserved" ? "secondary" : "outline"
                    }
                  >
                    {route.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <Route className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{route.distance}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{route.estimatedTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{route.currentLoad}% Load</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Navigation className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{route.alternatives} Alternatives</span>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Route Capacity</span>
                    <span>{route.currentLoad}%</span>
                  </div>
                  <Progress value={route.currentLoad} className="h-2" />
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <RefreshCw className="h-3 w-3 mr-1" />
                    Optimize
                  </Button>
                  <Button size="sm" variant="outline">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    Alert
                  </Button>
                  <Button size="sm" variant="outline">
                    <Zap className="h-3 w-3 mr-1" />
                    Divert
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Alternative Routes */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Route className="h-5 w-5 text-purple-600" />
            Alternative Route Suggestions
          </CardTitle>
          <CardDescription>AI-recommended alternative paths to reduce congestion</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {alternativeRoutes.map((alt, index) => (
              <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">{alt.name}</h4>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </div>
                <p className="text-sm text-gray-600 mb-2">Time Savings: {alt.savings}</p>
                <Badge variant={alt.capacity === "Available" ? "default" : "secondary"}>{alt.capacity}</Badge>
                <Button size="sm" className="w-full mt-3">
                  Activate Route
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
