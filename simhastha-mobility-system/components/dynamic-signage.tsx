import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Monitor, Zap, MapPin, Clock, AlertTriangle, CheckCircle, Wifi, Eye, Volume2, Languages } from "lucide-react"

export default function DynamicSignage() {
  const signagePoints = [
    {
      id: "DS-001",
      location: "Main Entrance Gate",
      type: "LED Display",
      status: "Online",
      message: "Welcome to Simhastha 2028 - Follow Green Signs to Ghats",
      language: "Hindi/English",
      brightness: 85,
      lastUpdate: "2 min ago",
    },
    {
      id: "DS-002",
      location: "Triveni Sangam Junction",
      type: "Smart Junction Display",
      status: "Online",
      message: "Crowd Alert: High Density - Use Alternative Route B",
      language: "Multi-language",
      brightness: 90,
      lastUpdate: "30 sec ago",
    },
    {
      id: "DS-003",
      location: "Railway Station Exit",
      type: "Directional Display",
      status: "Online",
      message: "Shuttle Service Every 5 Min - Platform 2",
      language: "Hindi/English",
      brightness: 80,
      lastUpdate: "1 min ago",
    },
    {
      id: "DS-004",
      location: "Emergency Route Marker",
      type: "Emergency Display",
      status: "Standby",
      message: "Emergency Route - Medical Assistance Available",
      language: "Multi-language",
      brightness: 100,
      lastUpdate: "5 min ago",
    },
  ]

  const junctionControls = [
    { name: "Traffic Light Sync", status: true, location: "12 Junctions" },
    { name: "Pedestrian Signals", status: true, location: "24 Crossings" },
    { name: "Dynamic Lane Control", status: true, location: "8 Major Roads" },
    { name: "Emergency Override", status: false, location: "All Junctions" },
  ]

  const messageTemplates = [
    "Welcome to Simhastha 2028",
    "Follow Green Signs to Ghats",
    "Shuttle Service Available",
    "Crowd Alert - Use Alternative Route",
    "Emergency - Follow Red Signs",
    "Medical Assistance Available",
  ]

  return (
    <div className="space-y-6">
      {/* Signage Network Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Active Displays</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">247</div>
            <p className="text-xs text-green-600">98% Online</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Smart Junctions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">24</div>
            <p className="text-xs text-blue-600">Fully Automated</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Languages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">8</div>
            <p className="text-xs text-purple-600">Multi-lingual Support</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Updates/Hour</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">1,247</div>
            <p className="text-xs text-orange-600">Real-time Updates</p>
          </CardContent>
        </Card>
      </div>

      {/* Message Broadcasting */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-600" />
            Dynamic Message Broadcasting
          </CardTitle>
          <CardDescription>Real-time message updates across all signage points</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Message Content</label>
                <Textarea placeholder="Enter your message here..." className="min-h-[100px]" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Priority Level</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="emergency">Emergency</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Language</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hindi">Hindi</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="multi">Multi-language</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Target Locations</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Displays</SelectItem>
                    <SelectItem value="ghats">Ghat Areas Only</SelectItem>
                    <SelectItem value="transport">Transport Hubs</SelectItem>
                    <SelectItem value="emergency">Emergency Routes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full">
                <Zap className="h-4 w-4 mr-2" />
                Broadcast Message
              </Button>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Quick Message Templates</h4>
              <div className="space-y-2">
                {messageTemplates.map((template, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start text-left h-auto p-3 bg-transparent"
                  >
                    {template}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Signage Status Monitor */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Monitor className="h-5 w-5 text-blue-600" />
            Signage Network Status
          </CardTitle>
          <CardDescription>Real-time monitoring of all digital signage points</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {signagePoints.map((sign, index) => (
              <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-lg">{sign.id}</h3>
                    <p className="text-sm text-gray-600">{sign.location}</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant={sign.status === "Online" ? "default" : "secondary"}>{sign.status}</Badge>
                    <Badge variant="outline">{sign.type}</Badge>
                  </div>
                </div>

                <div className="bg-gray-50 rounded p-3 mb-3">
                  <p className="text-sm font-medium">Current Message:</p>
                  <p className="text-sm text-gray-700 mt-1">{sign.message}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <Languages className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{sign.language}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{sign.brightness}% Brightness</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{sign.lastUpdate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wifi className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Connected</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Monitor className="h-3 w-3 mr-1" />
                    Update
                  </Button>
                  <Button size="sm" variant="outline">
                    <MapPin className="h-3 w-3 mr-1" />
                    Locate
                  </Button>
                  <Button size="sm" variant="outline">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    Alert
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Smart Junction Controls */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-green-600" />
            Smart Junction Management
          </CardTitle>
          <CardDescription>Automated traffic and pedestrian flow control</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {junctionControls.map((control, index) => (
              <div key={index} className="flex justify-between items-center py-3 border-b last:border-b-0">
                <div className="flex items-center gap-3">
                  <Switch checked={control.status} />
                  <div>
                    <span className="font-medium">{control.name}</span>
                    <p className="text-sm text-gray-600">{control.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {control.status ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 text-orange-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Emergency Controls */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle>Emergency Signage Controls</CardTitle>
          <CardDescription>Immediate emergency message broadcasting</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="destructive" className="h-20 flex-col gap-2">
              <AlertTriangle className="h-5 w-5" />
              Emergency Alert
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
              <MapPin className="h-5 w-5" />
              Route Diversion
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
              <Volume2 className="h-5 w-5" />
              Audio Announce
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
              <Monitor className="h-5 w-5" />
              System Override
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
